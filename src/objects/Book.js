import Dimensions from './Dimensions';

export default class Book {
    constructor() {
        this.title = '';
        this.authors = [];
        this.ean = '';
        this.isbn = '';
        this.publishedAt = '';
        this.rating = 0;
        this.nbRatings = 0;
        this.dimensions = new Dimensions();
        this.nbPages = 0;
        this.language = '';
        this.image = '';
        this.publisher = '';
        this.synopsis = '';
        this.priceRetail = '';
        this.priceNew = '';
        this.googlePlayLink = '';
        this.genre = '';
        this.categories = [];
    }
}
