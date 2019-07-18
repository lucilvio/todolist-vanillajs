import { Component } from "../lib/component.js";

export class TaskCounterComponent extends Component {
    constructor(model){
        super('TaskCounterComponent', model);
    }

    update(){
        updateTaskCounter(this.componentElement, this.model);
    }
}

function updateTaskCounter(componentElement, model){
    componentElement.innerHTML = `You have ${ model.tasksDone() } done taks of ${ model.numberOfTasks() }`;
}