import { ModelBinder } from "../lib/modelBinder.js";

export class TaskList extends ModelBinder {
    constructor() {
        super();
        this.newTaskTitle = '';
        this.tasks = new Array();
    }

    addNewTask(title) {
        let newTask = new Task(title);
        this.tasks.push(newTask);

        super.notify();
    }

    markTaskAsDone(title) {
        let task = this.tasks.find(t => t.title === title);

        if (!task)
            return;

        task.markAsDone();

        super.notify();
    }

    markTaskAsTodo(title) {
        let task = this.tasks.find(t => t.title === title);

        if (!task)
            return;

        task.markAsTodo();

        super.notify();
    }

    removeTask(title) {
        this.tasks.splice(this.tasks.indexOf(title), 1);
        // console.log(title);
        // let filteredArray = this.tasks.filter(t => t.title !== title);
        // this.tasks == this.tasks.filter(t => t.title != title);
        console.log(this.tasks);
        super.notify();
    }

    tasksDone() {
        return this.tasks.filter(t => t.done === true).length;
    }

    numberOfTasks() {
        return this.tasks.length;
    }
}

class Task {
    constructor(title) {
        this.title = title;
        this.done = false;
    }

    markAsDone() {
        this.done = true;
    }

    markAsTodo() {
        this.done = false;
    }
}