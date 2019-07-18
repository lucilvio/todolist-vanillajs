import { Component } from "../lib/component.js";

export class TaskListComponent extends Component {
    constructor(model) {
        super('TaskListComponent', model);
    }

    update() {
        updateTaskList(this.componentElement, this.model);
    }
}

function updateTaskList(componentElement, model) {
    componentElement.innerHTML = '';

    model.tasks.forEach((task, i) => {
        let id = `item-${i}`;

        let itemCheck = document.createElement('input');
        itemCheck.id = id;
        itemCheck.type = 'checkbox';
        itemCheck.checked = task.done;
        itemCheck.onclick = function () { clickOnItemList(itemCheck, model, task); }

        let itemTitle = document.createElement('label');
        itemTitle.innerText = task.title;

        let deleteButton = document.createElement('a');
        deleteButton.href = '#';
        deleteButton.innerHTML = 'X';
        deleteButton.onclick = function () { clickOnDeleteItemList(listItem, model, task); }

        let listItem = document.createElement('li');
        listItem.id = id;
        listItem.append(itemCheck);
        listItem.append(itemTitle);
        listItem.append(deleteButton);

        if(task.done)
        {
            listItem.style.color = 'red';
            listItem.style.textDecoration = 'line-through';
        }

        componentElement.append(listItem);
    });
}

function clickOnItemList(checkElement, model, task) {
    if (checkElement.checked)
        model.markTaskAsDone(task.title);
    else
        model.markTaskAsTodo(task.title);
}

function clickOnDeleteItemList(listItem, model, task) {
    model.removeTask(task.title);
}