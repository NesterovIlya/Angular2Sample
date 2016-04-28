import { Component, OnInit } from 'angular2/core';
import {ArticleMiniComponent} from '../article/article-mini.component';
import { Article } from '../article/article'
import {ArticleService} from "../article/article.service";
import {PaginalRequest} from "../util/paginal-request";
import {ArticlePaginalResponse} from "../article/article-paginal-response";


@Component({
    selector: 'feed',
    styleUrls: ['app/feed/feed.component.css'],
    templateUrl: 'app/feed/feed.component.html',
    directives: [
        ArticleMiniComponent
    ]
})
export class FeedComponent implements OnInit {

    articleResponse: ArticlePaginalResponse;
    pageOpts: PaginalRequest;

    constructor(
        private _articleService: ArticleService
    ) {}

    ngOnInit() {
        this.pageOpts = {
            page: 1,
            itemsPerPage: 5
        };
        this.getArticles();
    }

    getArticles() {
        this._articleService.getArticlesByPage(this.pageOpts).then(articleResponse => this.articleResponse = articleResponse);
    }

    getTotalPageCount() {
        let modulo: number = this.articleResponse.total % this.pageOpts.itemsPerPage;
        return modulo === 0 ? this.articleResponse.total / this.pageOpts.itemsPerPage : (this.articleResponse.total - modulo) / this.pageOpts.itemsPerPage + 1;
    }

    nextPage() {
        if (this.pageOpts.page < this.getTotalPageCount()) {
            this.pageOpts.page++;
            this.getArticles();
        }
    }

    previousPage() {
        if (this.pageOpts.page >= 1) {
            this.pageOpts.page--;
            this.getArticles();
        }
    }
}

