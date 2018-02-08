import { Injectable } from '@angular/core';
import { SocketIo } from 'ng-io';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ChatService {

    constructor(private socket: SocketIo) { }

    sendMessage(msg: string, id: string) {
        this.socket.emit('chat message', {msg: msg, id: id});
    }

    getMessage() {
        return this.socket
            .fromEvent<any>('chat message')
            .map( data => data.msg );
    }

    getOnline() {
        return this.socket
            .fromEvent<any>('online')
            .map( data => data.online );
    }
    getId() {
        return this.socket
            .fromEvent<any>('id')
            .map( data => data.id );
    }

}
