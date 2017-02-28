import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent}   from './app.component';
import {GetusersComponent} from "./getusers.component";
import {AdduserComponent} from "./adduser.component";
import {UsersService} from './users.service';
import {HomeComponent} from "./home.component";
import {NotFoundComponent} from "./not-found.component";

const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'getusers', component: GetusersComponent},
    { path: 'adduser', component: AdduserComponent},
    { path: '**', component: NotFoundComponent }
];


@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, GetusersComponent, AdduserComponent, HomeComponent, NotFoundComponent],
    providers: [UsersService],
    bootstrap: [AppComponent]
})
export class AppModule {
}