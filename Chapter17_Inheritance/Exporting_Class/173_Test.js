import { LoginPage,login } from "./LoginPage.js";

let page = new LoginPage();
page.open();
page.login("admin");