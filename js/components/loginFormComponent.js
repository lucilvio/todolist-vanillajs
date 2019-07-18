import { Component } from "../lib/component.js";
import { AuthService } from "../services/authService.js";

export class LoginFormComponent extends Component {
    constructor(model) {
        super('LoginFormComponent', model);
    }

    update() {
        var loginButton = this.componentElement.querySelector('div > button');
        loginButton.onclick = () => loginButtonClick(this.model);
        
        super.update();
    }
}

var authService = new AuthService();

function loginButtonClick(model) {
    try {
        authService.login(model.user, model.user, model.password);
        window.location.href = '/index.html';
    }
    catch(ex) {
        alert('wrong user or password!');
    }
}