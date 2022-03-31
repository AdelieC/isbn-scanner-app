import Dimensions from './Dimensions';

export default class Book {
    constructor() {
        this._title = '';
        this._authors = [];
        this._ean = '';
        this._isbn = '';
        this._publishedAt = '';
        this._rating = 0;
        this._nbRatings = 0;
        this._dimensions = new Dimensions();
        this._nbPages = 0;
        this._language = '';
        this._image = '';
        this._publisher = '';
        this._synopsis = '';
        this._priceRetail = '';
        this._priceNew = '';
        this._googlePlayLink = '';
        this._genre = '';
        this._categories = [];
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get authors() {
        return this._authors;
    }

    set authors(value) {
        this._authors = value;
    }

    get ean() {
        return this._ean;
    }

    set ean(value) {
        this._ean = value;
    }

    get isbn() {
        return this._isbn;
    }

    set isbn(value) {
        this._isbn = value;
    }

    get publishedAt() {
        return this._publishedAt;
    }

    set publishedAt(value) {
        this._publishedAt = value;
    }

    get rating() {
        return this._rating;
    }

    set rating(value) {
        this._rating = value;
    }

    get nbRatings() {
        return this._nbRatings;
    }

    set nbRatings(value) {
        this._nbRatings = value;
    }

    get dimensions() {
        return this._dimensions;
    }

    set dimensions(value) {
        this._dimensions = value;
    }

    get nbPages() {
        return this._nbPages;
    }

    set nbPages(value) {
        this._nbPages = value;
    }

    get language() {
        return this._language;
    }

    set language(value) {
        this._language = value;
    }

    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }

    get publisher() {
        return this._publisher;
    }

    set publisher(value) {
        this._publisher = value;
    }

    get synopsis() {
        return this._synopsis;
    }

    set synopsis(value) {
        this._synopsis = value;
    }

    get priceRetail() {
        return this._priceRetail;
    }

    set priceRetail(value) {
        this._priceRetail = value;
    }

    get priceNew() {
        return this._priceNew;
    }

    set priceNew(value) {
        this._priceNew = value;
    }

    get googlePlayLink() {
        return this._googlePlayLink;
    }

    set googlePlayLink(value) {
        this._googlePlayLink = value;
    }

    get genre() {
        return this._genre;
    }

    set genre(value) {
        this._genre = value;
    }

    get categories() {
        return this._categories;
    }

    set categories(value) {
        this._categories = value;
    }
}
