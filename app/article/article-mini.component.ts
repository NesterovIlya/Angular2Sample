import { Component, Input } from 'angular2/core';
import { Router } from 'angular2/router';
import {Article} from "./article";


@Component({
    selector: 'article-mini',
    styleUrls: ['app/article/article.component.css'],
    templateUrl: 'app/article/article-mini.component.html'
})
export class ArticleMiniComponent {

    @Input() article : Article;

    constructor(
        private _router: Router
    ) {}

    goToArticle() {
        this._router.navigate(['Article', { id: this.article.id }]);
    }
}