export class ModelBinder {
    constructor() {
        this.components = new Array();
    }

    addComponentListener(component){
        if(!component)
            return;

        this.components.push(component);
    }

    notify() {
        this.components.forEach(component => {
            component.update();
        });
    }
}