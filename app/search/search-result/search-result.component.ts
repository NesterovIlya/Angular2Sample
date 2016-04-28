import { Component, Input } from 'angular2/core';
import {Article} from "../../article/article";
import {ArticleMiniComponent} from "../../article/article-mini.component";

@Component({
    selector: 'search-result',
    template: `
    <div *ngIf="results">
        <article-mini
                *ngFor="#article of results"
                [article]="article">
        </article-mini>
    </div>
    `,
    directives: [
        ArticleMiniComponent
    ]
})
export class SearchResultComponent {

    @Input() results: Article[];
}