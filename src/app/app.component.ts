import {Component} from '@angular/core';

@Component({
    selector: "my-app",
    template: `<h1>My first app!</h1>
                <get-users></get-users>
                <add-user></add-user>`
})

export class AppComponent{}