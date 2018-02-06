import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {CollectionData} from './interfaces/collection-data';
import {AppService} from './app.service';

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



        });


    }

    public updateDB(): void {
        this.dbData = [];
        for (const pawn of this.as.pawnList) {
            this.dbData.push(pawn.getAllData());
        }
        this.itemsCollection.doc('FWCPVQ6c8WUGDUMqS9cr').update({pawns: this.dbData});
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
    }

}
