import {Injectable} from 'angular2/core';
import {Article} from './article';
import {ARTICLES} from './mock-articles';
import {PaginalRequest} from "../util/PaginalRequest";
import {ArticlePaginalResponse} from "./ArticlePaginalResponse";

@Injectable()
export class ArticleService {


    getArticlesByPage(request: PaginalRequest) {
        return Promise.resolve(ARTICLES).then(articles => this._emulatePagination(articles, request));
    }

    findArticles(searchQuery: string) {
        return Promise.resolve(ARTICLES).then(
            articles => articles.filter(article => article.title.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1)
        );
    }

    getArticle(id: number) {
        return Promise.resolve(ARTICLES).then(
            articles => articles.filter(article => article.id === id)[0]
        );
    }

    private _emulatePagination(articles: Article[], request: PaginalRequest) {

        let offset = (request.page - 1) * request.itemsPerPage;

        let result: ArticlePaginalResponse = {
            page: request.page,
            itemsPerPage: request.itemsPerPage,
            total: articles.length,
            articles: []
        };

        if (articles.length > offset) {
            let lastIndex = offset + request.itemsPerPage;

            if (lastIndex > articles.length) {
                lastIndex = articles.length;
            }
            result.articles = articles.slice(offset, lastIndex);
        }

        return result;
    }

}