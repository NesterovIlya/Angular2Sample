import {Article} from "./article";
import {PaginalResponse} from "../util/paginal-response";


export class ArticlePaginalResponse extends PaginalResponse {
    articles : Article[]
}