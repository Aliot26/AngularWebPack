import {Users} from './users';
import {Injectable} from "@angular/core";

@Injectable()
export class UsersService {
    private data:Users[] = [
        {name: "Ivan", age: 56},
        {name: "Igor", age: 36},
        {name: "Anna", age: 20},
        {name: "Tatiana", age: 43},
    ];

    getUsers():Users[] {
        return this.data;
    }

    addUser(name:string, age:number) {
        this.data.push(new Users(name, age));
    }
}