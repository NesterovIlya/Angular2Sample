import { Component } from 'angular2/core';
import {SearchBarComponent} from "./search-bar/search-bar.component";
import {SearchResultComponent} from "./search-result/search-result.component";
import {Article} from "../article/article";
import {ArticleService} from "../article/article.service";


@Component({
    selector: 'search',
    styleUrls: ['app/search/search.component.css'],
    template: `
    <section class="search-bar">
        <search-bar (queryChanged)="onQueryChanged($event)"></search-bar>
    </section>
    <section class="search-result">
        <search-result [results]="results"></search-result>
    </section>
    `,
    directives: [
        SearchBarComponent,
        SearchResultComponent
    ]
})
export class SearchComponent {

    results : Article[];

    constructor(
        private _articleService: ArticleService
    ) {}

    onQueryChanged(searchQuery) {
        this._articleService.findArticles(searchQuery).then(articles => this.results = articles);
    }
}