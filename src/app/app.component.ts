import {Component} from '@angular/core';

@Component({
    selector: "my-app",
    template: `<h1>My first app!</h1>
                <nav>
                        <a routerLink="" routerLinkActive="active"  [routerLinkActiveOptions]="{exact:true}">&nbsp;Главная&nbsp;</a>
                        <a routerLink="/getusers"  routerLinkActive="active">&nbsp;Список пользователей&nbsp;</a>
                        <a routerLink="/adduser"  routerLinkActive="active">&nbsp;Добавить пользователя&nbsp;</a>
                </nav>
                <router-outlet></router-outlet>`
})

export class AppComponent {
}