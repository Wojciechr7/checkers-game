import {Player} from './players/player';
import {WhitePlayer} from './players/white-player';
import {BlackPlayer} from './players/black-player';
import {PlayerSettings} from '../settings/game.const';
import {Pawn} from './pawns/pawn';
import {Index} from '../interfaces';

export class Game {
    public players: Array<Player>;
    public actualPlayer: number;
    // 0 - black player
    // 1 - white player


    constructor() {
        this.players = [];
        this.players.push(new BlackPlayer(PlayerSettings.INIT_PAWNS, PlayerSettings.INIT_LOST_PAWNS));
        this.players.push(new WhitePlayer(PlayerSettings.INIT_PAWNS, PlayerSettings.INIT_LOST_PAWNS));
        this.actualPlayer = 1;
    }

    public changeActualPlayer(pawn): void {
        if (pawn.getColor() === 'black') {
            this.actualPlayer = 1;
        } else {
            this.actualPlayer = 0;
        }
    }

    public switchStatus(): void {
        let next: number;
        next = (this.actualPlayer === 0) ? 1 : 0;
        if (!this.players[this.actualPlayer].Active) {
            this.players[this.actualPlayer].Active = true;
            this.players[next].Active = false;
        }
    }



    public updateStats(pawnList: Array<Pawn>): void {
        for (const player of this.players) {
            player.update(pawnList);
        }
    }

    public didAttack(before: Index, after: Index, pawnList: Array<Pawn>): boolean {
        return Math.abs(before.x - after.x) === 2;
    }

    public reset() {
        this.actualPlayer = 1;
        this.players[0].Active = false;
        this.players[1].Active = true;
        this.players = [];
        this.players.push(new BlackPlayer(PlayerSettings.INIT_PAWNS, PlayerSettings.INIT_LOST_PAWNS));
        this.players.push(new WhitePlayer(PlayerSettings.INIT_PAWNS, PlayerSettings.INIT_LOST_PAWNS));
    }

}
