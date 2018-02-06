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

    public switchPlayers(): void {
        for (const player of this.players) {
            player.switchState();
        }
        this.actualPlayer = (this.actualPlayer === 1) ? 0 : 1;
    }

    public updateStats(pawnList: Array<Pawn>): void {
        for (const player of this.players) {
            player.update(pawnList);
        }
    }

    public didAttack(before: Index, after: Index): boolean {
        return Math.abs(before.x - after.x) === 2;
    }
}
