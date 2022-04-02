export default class Author {
    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.birthDate = null;
        this.nationality = '';
        this.image = '';
        this.openLibraryId = '';
    }

    toString() {
        return this.firstName + ' ' + this.lastName;
    }
}
