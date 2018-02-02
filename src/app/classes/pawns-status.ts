import {BlackPawn} from './pawns/black-pawn';
import {WhitePawn} from './pawns/white-pawn';
import {Pawn} from './pawns/pawn';

export class PawnsStatus {


    public createData(): Array<Pawn> {
        return [
            new BlackPawn(2, 5, true),
            new BlackPawn(4, 5, true),
            new WhitePawn(7, 2, true),
            new WhitePawn(7, 4, true)
        ];
    }
}
