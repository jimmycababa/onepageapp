import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle("Settings")
    }


    async getHtml() {
        return `
        <h1>This Is The Settings Page</h1>
        <p> Here is some filler text</p>
        `;
    }
}