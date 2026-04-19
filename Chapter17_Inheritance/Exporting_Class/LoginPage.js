import { BasePage,open } from "./BasePage.js";

export class LoginPage extends BasePage {
    constructor() {
        super("Login Page");
    }

    login(user) {
        console.log(user + " logged in");
    }
}