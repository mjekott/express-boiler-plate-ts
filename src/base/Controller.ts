import { Router } from 'express';


export default abstract class Controller {

    abstract path: string;
    abstract router: Router
    constructor() {
        this.autobind()

    }

    autobind() {
        const instance: any = this
        const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
        // Bind all methods
        methods
            .filter(method => (method !== 'constructor'))
            .forEach((method) => { instance[method] = instance[method].bind(this); });
    }
}