import { RootComponent } from "../lib/rootComponent.js";

export class HeaderComponent extends RootComponent {
    constructor() {
        super('HeaderComponent');
    }

    update() {
        this.componentElement.style.height = "30px";
        this.componentElement.style.backgroundColor = 'blue';

        super.update();
    }
}