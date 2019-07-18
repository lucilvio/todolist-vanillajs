import { RootComponent } from "../lib/rootComponent.js";
import { AuthService } from "../services/authService.js";

export class TodoListComponent extends RootComponent {
    constructor() {
        super('TodoListComponent');

        this.authService = new AuthService();

        if(!this.authService.isLoggedIn())
            window.location.href = '/login.html';
    }

    update(){
        super.update();
    }
}