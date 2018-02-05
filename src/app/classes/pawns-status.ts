import {BlackPawn} from './pawns/black-pawn';
import {WhitePawn} from './pawns/white-pawn';
import {Pawn} from './pawns/pawn';

export class PawnsStatus {


    public createData(): Array<Pawn> {
        return [
            new BlackPawn(0, 7, true),
            new BlackPawn(2, 7, true),
            new BlackPawn(4, 7, true),
            new BlackPawn(6, 7, true),
            new BlackPawn(1, 6, true),
            new BlackPawn(3, 6, true),
            new BlackPawn(5, 6, true),
            new BlackPawn(7, 6, true),
            new BlackPawn(0, 5, true),
            new BlackPawn(2, 5, true),
            new BlackPawn(4, 5, true),
            new BlackPawn(6, 5, true),

            new WhitePawn(1, 0, true),
            new WhitePawn(3, 0, true),
            new WhitePawn(5, 0, true),
            new WhitePawn(7, 0, true),
            new WhitePawn(0, 1, true),
            new WhitePawn(2, 1, true),
            new WhitePawn(4, 1, true),
            new WhitePawn(6, 1, true),
            new WhitePawn(1, 2, true),
            new WhitePawn(3, 2, true),
            new WhitePawn(5, 2, true),
            new WhitePawn(7, 2, true)

        ];
    }
}
