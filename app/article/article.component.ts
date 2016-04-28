import { Component, OnInit} from 'angular2/core';
import {Router,RouteParams} from 'angular2/router';
import {ArticleService} from './article.service';
import {Article} from './article';


@Component({
    selector: 'article',
    styleUrls: ['app/article/article.component.css'],
    templateUrl: 'app/article/article.component.html'
})
export class ArticleComponent implements OnInit {

    article: Article;

    constructor(
        private _router : Router,
        private _routeParams: RouteParams,
        private _articleService: ArticleService
    ) {}

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._articleService.getArticle(id)
            .then(article => this.article = article);
    }

    goToSearch() {
        this._router.navigate(['Search']);
    }
}