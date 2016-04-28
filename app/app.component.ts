import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {HeaderComponent} from "./header/header.component";
import {FeedComponent} from "./feed/feed.component";
import {SearchComponent} from "./search/search.component";
import {ArticleComponent} from "./article/article.component";
import {ArticleService} from "./article/article.service";


@Component({
    selector: 'sample-app',
    styleUrls: ['app/app.component.css'],
    template: `
    <div class="main-container">
        <sample-app-header></sample-app-header>
        <section id="mainContent">
            <div class="left-side">
                <router-outlet></router-outlet>
            </div>
            <div class="right-side">
                <feed></feed>
            </div>
        </section>
    </div>
    `,
    directives: [
        ROUTER_DIRECTIVES,
        HeaderComponent,
        FeedComponent,
        SearchComponent,
        ArticleComponent
    ],
    providers: [
        ROUTER_PROVIDERS,
        ArticleService
    ]
})
@RouteConfig([
    {
        path: '/search',
        name: 'Search',
        component: SearchComponent,
        useAsDefault: true
    },
    {
        path: '/article/:id',
        name: 'Article',
        component: ArticleComponent
    }
])
export class AppComponent { }

