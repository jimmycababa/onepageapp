import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle("Dashboard")
    }


    async getHtml() {
        return `
        <h1>This Is The Main Page</h1>
        <p> Here is some filler text</p>
        <p>
        <a href="/posts" data-link>View Recent Posts</a>
        </p>`;
    }
}