import Dimensions from './Dimensions';

export default class Book {
    constructor() {
        this._title = '';
        this._authors = [];
        this._ean = '';
        this._isbn = '';
        this._publishedAt = '';
        this._rating = 0;
        this._dimensions = new Dimensions();
        this._nbPages = 0;
        this._language = '';
        this._image = '';
        this._publishers = [];
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

    get publishers() {
        return this._publishers;
    }

    set publishers(value) {
        this._publishers = value;
    }
}
