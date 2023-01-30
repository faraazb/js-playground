import { generateUniqueId } from "../utils.js";

export default class Component {
    #isMounted = false;

    constructor () {
        this.id = generateUniqueId({ prefix: this.constructor.name.toString().toLowerCase() });
    }

    mount(el = document.body) {
        if (this.#isMounted) {
            console.warn("Already mounted")
        }
        el.appendChild(this.render());
    }
}