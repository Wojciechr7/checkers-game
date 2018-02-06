import {BlackPawn} from './pawns/black-pawn';
import {WhitePawn} from './pawns/white-pawn';
import {Pawn} from './pawns/pawn';

export class PawnsStatus {


    public createData(): Array<Pawn> {
        return [
            new BlackPawn(0, 7, true, 0),
            new BlackPawn(2, 7, true, 1),
            new BlackPawn(4, 7, true, 2),
            new BlackPawn(6, 7, true, 3),
            new BlackPawn(1, 6, true, 4),
            new BlackPawn(3, 6, true, 5),
            new BlackPawn(5, 6, true, 6),
            new BlackPawn(7, 6, true, 7),
            new BlackPawn(0, 5, true, 8),
            new BlackPawn(2, 5, true, 9),
            new BlackPawn(4, 5, true, 10),
            new BlackPawn(6, 5, true, 11),

            new WhitePawn(1, 0, true, 12),
            new WhitePawn(3, 0, true, 13),
            new WhitePawn(5, 0, true, 14),
            new WhitePawn(7, 0, true, 15),
            new WhitePawn(0, 1, true, 16),
            new WhitePawn(2, 1, true, 17),
            new WhitePawn(4, 1, true, 18),
            new WhitePawn(6, 1, true, 19),
            new WhitePawn(1, 2, true, 20),
            new WhitePawn(3, 2, true, 21),
            new WhitePawn(5, 2, true, 22),
            new WhitePawn(7, 2, true, 23)

        ];
    }
}
