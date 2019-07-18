import { RootComponent } from "./rootComponent.js";

import { TaskList } from "../models/taskList.js";
import { Login } from "../models/login.js";

import { AuthService } from "../services/authService.js";

import { TaskListComponent } from "../components/taskListComponent.js";
import { NewTaskComponent } from "../components/newTaskComponent.js";
import { TaskCounterComponent } from "../components/taskCounterComponent.js ";
import { TodoListComponent } from "../components/todoListComponent.js";
import { LoginComponent } from "../components/loginComponent.js";
import { LoginFormComponent } from "../components/loginFormComponent.js";
import { HeaderComponent } from "../components/headerComponent.js";
import { LogoutComponent } from "../components/logoutComponent.js";
import { UserInfoComponent } from "../components/userInfoComponent.js";

export class AppBootstrap {
    init() {
        var rootComponents = document.querySelectorAll('[root-component]');

        rootComponents.forEach(rc => {
            var modelName = rc.getAttribute("model");
            var rootComponentName = rc.getAttribute('root-component');

            if (!rootComponentName)
                return;

            let modelPrototype = eval(modelName);
            let rootComponentPrototype = eval(rootComponentName);

            let rootComponent;
            let model;

            if (modelPrototype) {
                model = new modelPrototype();
                rootComponent = new rootComponentPrototype(rootComponentName, model);
            }
            else {
                rootComponent = new rootComponentPrototype(rootComponentName);
            }

            var childComponents = rc.querySelectorAll('[component]');

            childComponents.forEach(cc => {
                var childComponentName = cc.getAttribute("component");
                var childComponentPrototype = eval(childComponentName);

                let childComponent = new childComponentPrototype(model);

                rootComponent.addChildComponent(childComponent);

                if(model)
                    model.addComponentListener(childComponent);
            });

            rootComponent.update();
        });
    }
}