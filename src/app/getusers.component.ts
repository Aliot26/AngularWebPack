import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {Users} from './users';

@Component({
    selector: 'get-users',
    template: `<h3>Это компонент Getusers использует сервис users.service</h3>
    <div class="panel">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Возраст</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.name}}</td>
                    <td>{{item.age}}</td>
                </tr>
            </tbody>
        </table>
    </div>`
})
export class GetusersComponent implements OnInit {

    items:Users[] = [];

    constructor(private usersService:UsersService) {
    }

    ngOnInit() {
        this.items = this.usersService.getUsers();
    }
}