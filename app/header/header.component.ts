import { Component } from 'angular2/core';

@Component({
    selector: 'sample-app-header',
    styleUrls: ['app/header/header.component.css'],
    template: `
    <header id="headerContainer">
        <h1>{{title}}</h1>
    </header>
    `
})
export class HeaderComponent {
    title = "Angular 2 Sample App"
}