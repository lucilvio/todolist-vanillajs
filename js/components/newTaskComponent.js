import { Component } from "../lib/component.js";

export class NewTaskComponent extends Component {
    constructor(model){
        super('NewTaskComponent', model);
    }

    update(){
        updateNewTaskInput(this.componentElement, this.model);
        super.update();
    }
}

function updateNewTaskInput(componentElement, model){
    componentElement.innerHTML = '';

    var newTaskLabel = document.createElement('p');
    newTaskLabel.innerHTML = 'What task do you need to do?';

    var taskNameInput = document.createElement('input');
    taskNameInput.type = 'text';
    taskNameInput.setAttribute('model', 'newTaskTitle');
    taskNameInput.required = true;

    var newTaskButton = document.createElement('button');
    newTaskButton.innerHTML = 'New Task';
    newTaskButton.onclick = () => addNewTask(model);

    componentElement.append(newTaskLabel);
    componentElement.append(taskNameInput);
    componentElement.append(newTaskButton);
}

function addNewTask(model) {
    model.addNewTask(model.newTaskTitle);
}