import { Component } from "./component.js";

export class RootComponent extends Component {
    constructor(name, model) {
        super(name, model);

        this.childComponents = new Array();
        this.componentElement = document.querySelector(`div[root-component="${name}"]`);
    }

    addChildComponent(component){
        if(!component)
            return;

        this.childComponents.push(component);
    }

    update() {
        this.childComponents.forEach(component => {
            component.update();
        });
    }
}