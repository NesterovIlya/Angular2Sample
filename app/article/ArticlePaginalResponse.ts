import {Article} from "./article";
import {PaginalResponse} from "../util/PaginalResponse";


export class ArticlePaginalResponse extends PaginalResponse {
    articles : Article[]
}