import { AppBootstrap } from './lib/AppBootstrap.js';

class TodoListApp extends AppBootstrap {
    constructor(){
        super();
    }
}

var app = new TodoListApp();
app.init();