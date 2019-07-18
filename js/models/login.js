import { ModelBinder } from "../lib/modelBinder.js";

export class Login extends ModelBinder {
    constructor() {
        super();
        this.usuario = '';
        this.senha = '';
    }
}