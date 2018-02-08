import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Socket} from 'ng-socket-io';
import {ChatService} from './chat.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
    messages;
    public title: string;
    private online: number;
    private myId: string;


    constructor(public cs: ChatService) {
        this.messages = [];
        this.myId = 'empty';
    }

    public sendEvent(msg: string, element, keyCode?: number): void {
        if (keyCode) {
            if (keyCode === 13) {
                this.send(msg, element);
            }
        } else {
            this.send(msg, element);
        }

    }

    private send(msg: string, element): void {
        this.cs.sendMessage(msg, this.myId);
        element.value = '';
    }
    public isMyMessage(id: string): boolean {
        return (id === this.myId);
    }


    ngOnInit() {

        this.cs.getMessage().subscribe(m => {
            this.messages.push(m);
        });

        this.cs.getOnline().subscribe(k => {
            this.online = k;
            this.title = `Chat (online: ${this.online})`;
        });
        this.cs.getId().subscribe(id => {
            if (this.myId === 'empty') {
                this.myId = id;
            }
        });

    }

}
