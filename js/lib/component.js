export class Component {
    constructor(name, model) {
        this.name = name;
        this.model = model;
        this.componentElement = document.querySelector(`div[component="${name}"]`);
    }

    update() {
        enableDataBind(this.componentElement, this.model);
    }
}

function enableDataBind(componentElement, model) {
    let inputElements = componentElement.querySelectorAll('input');

    inputElements.forEach(input => {
        if(!input.hasAttribute('model'))
            return;

        input.onkeyup = (evt) => {
            let input = evt.target;

            var inputModel = input.getAttribute('model');
            model[inputModel] = input.value;
        }
    });
}