import { Component } from "../lib/component.js";
import { AuthService } from "../services/authService.js";

export class UserInfoComponent extends Component {
    constructor(model) {
        super('UserInfoComponent', model);
        this.authService = new AuthService();
    }

    update() {
        var loggedUser = this.authService.loggedUser();
        console.log(loggedUser);
        console.log(loggedUser.name);
        if(!loggedUser)
            return;

        var userName = document.createElement('p');
        userName.innerHTML = loggedUser.name;

        this.componentElement.append(userName);
    }
}