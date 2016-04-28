import { Component, Output, EventEmitter} from 'angular2/core';
import {ArticleService} from "../../article/article.service";
import {Article} from "../../article/article";

@Component({
    selector: 'search-bar',
    styleUrls: ['app/search/search-bar/search-bar.component.css'],
    template: `
    <div class="input-group margin-bottom-sm">
        <span class="input-group-addon"><i class="fa fa-search fa-fw" aria-hidden="true"></i></span>
        <input class="form-control" type="text" placeholder="Search phrase" #search (keyup)="onKey(search.value)">
    </div>
    `
})
export class SearchBarComponent {

    @Output() queryChanged : EventEmitter<string> = new EventEmitter<string>();

    onKey(searchString: string) {
        if (!searchString || searchString.length < 3) {
            return;
        }
        this.queryChanged.emit(searchString);
    }
}