import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {Users} from './users';

@Component({
    selector: 'add-user',
    template: `<h3>Это компонент AddUser использует сервис users.service</h3>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="name" placeholder = "Имя" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="number" class="form-control" [(ngModel)]="age" placeholder="Возраст" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addUser(name, age)">Добавить</button>
                </div>
            </div>
        </div>        
    </div>`
})
export class AdduserComponent implements OnInit {

    items:Users[] = [];

    constructor(private usersService:UsersService) {
    }

    addUser(name:string, age:number) {

        this.usersService.addUser(name, age);
    }

    ngOnInit() {
        this.items = this.usersService.getUsers();
    }
}