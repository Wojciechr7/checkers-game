import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {CollectionData} from './interfaces/collection-data';
import {AppService} from './app.service';
import {Pawn} from "./classes/pawns/pawn";
import {BlackPawn} from "./classes/pawns/black-pawn";
import {Arrow} from "./classes/arrow";

@Injectable()
export class CollectionService {
    private itemsCollection: AngularFirestoreCollection<any>;
    private items: Observable<any>;
    public dbData: Array<CollectionData>;

    constructor(db: AngularFirestore, public as: AppService) {
        this.itemsCollection = db.collection<Array<CollectionData>>('checkers');
        this.items = this.itemsCollection.valueChanges();


        this.items.subscribe(k => {
            for (const pawn of this.as.pawnList) {
                pawn.setAllData(k[0].pawns);
            }

            this.as.game.actualPlayer = k[0].player;
            this.as.game.switchStatus();
            this.as.game.updateStats(this.as.pawnList);
            this.as.focusedPawn = new BlackPawn(-1, -1, false, -1);
            if (k[0].arrow[0]) {
                this.as.arrow = new Arrow(k[0].arrow[0], k[0].arrow[1]);
                this.as.arrow.drawArrow();
            }

            this.as.isDbUpdated = true;
        });


    }

    public updateDB(): void {
        this.dbData = [];
        for (const pawn of this.as.pawnList) {
            this.dbData.push(pawn.getAllData());
        }
        this.itemsCollection.doc('FWCPVQ6c8WUGDUMqS9cr').update({pawns: this.dbData});
        if (this.as.arrow) {
            this.itemsCollection.doc('FWCPVQ6c8WUGDUMqS9cr').update({arrow:
                    [
                        this.as.arrow.BeforeIndex,
                        this.as.arrow.AfterIndex
                    ]
            });
        }

        if (this.as.switchPlayers) {
            this.itemsCollection.doc('FWCPVQ6c8WUGDUMqS9cr').update({player: this.as.game.actualPlayer});
            this.as.switchPlayers = false;
        }

    }


    public resetDB(): void {
        this.dbData = [];

        for (const pawn of this.as.pawnList) {
            this.dbData.push(pawn.getAllData());
        }

        this.itemsCollection.doc('FWCPVQ6c8WUGDUMqS9cr').update({pawns: this.dbData});
        this.itemsCollection.doc('FWCPVQ6c8WUGDUMqS9cr').update({player: 1});
        this.itemsCollection.doc('FWCPVQ6c8WUGDUMqS9cr').update({arrow: []});

        if (this.as.arrow) {
            this.as.arrow.hideArrow();
        }
    }

}
