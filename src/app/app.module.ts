import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {AppComponent}   from './app.component';
import {GetusersComponent} from "./getusers.component";
import {AdduserComponent} from "./adduser.component";
import {UsersService} from './users.service';


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, GetusersComponent, AdduserComponent],
    providers: [UsersService],
    bootstrap: [AppComponent]
})
export class AppModule {
}