import { Component } from "../lib/component.js";
import {AuthService } from "../services/authService.js";

export class LogoutComponent extends Component {
    constructor(model){
        super('LogoutComponent', model);
    }

    update() {
        let logoutLink = document.createElement('a');
        logoutLink.innerHTML = 'Sair';
        logoutLink.href = '#';
        logoutLink.onclick = logout;
        
        this.componentElement.append(logoutLink);
    }
}

var authService = new AuthService();

function logout(){
    authService.logout();
    window.location.href = '/login.html';
}