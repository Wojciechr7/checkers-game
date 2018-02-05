import {Player} from './players/player';
import {WhitePlayer} from './players/white-player';
import {BlackPlayer} from './players/black-player';
import {PlayerSettings} from '../settings/game.const';

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
        this.actualPlayer = (this.actualPlayer === 1) ? 0 : 1;
    }





}
