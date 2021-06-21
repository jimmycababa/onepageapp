import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle("Posts")
    }


    async getHtml() {
        return `
        <h1>This Is The Posts Page</h1>
        <p> Here is some filler text</p>
        `;
    }
}