export default class AppError extends Error {
    constructor(message = '', buttonText = '', icon = '', link = '', callback = null) {
        super(message);
        this.buttonText = buttonText;
        this.icon = icon;
        this.link = link;
        this.callback = callback;
    }
}
