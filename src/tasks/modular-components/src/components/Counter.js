import { generateUniqueId } from "../utils.js";

class Counter {
    #id;
    #count = 0;
    #isMounted = false;

    constructor(count = 0) {
        this.#id = generateUniqueId({prefix: "counter"});
        this.#count = count;
    }

    get count() {
        return this.#count;
    }

    set count(count) {
        if (!Number.isInteger(count)) {
            console.warn(`count ${count} is not an integer`);
            return;
        }
        this.#count = count;
        this.#updateCount();
    }

    increment() {
        this.#count = this.#count + 1;
        this.#updateCount();
    }

    decrement() {
        this.#count = this.#count - 1;
        this.#updateCount();
    }

    reset() {
        this.#count = 0;
        this.#updateCount();
    }

    #updateCount() {
        const countDiv = document.querySelector(`#${this.#id} > .counter__count`);
        countDiv.innerText = this.#count;
    }

    static #createButton(className, icon, onClick) {
        const button = document.createElement("button");
        button.className = className;
        button.addEventListener("click", onClick);
        // const buttonLabel = document.createElement("span")
        // buttonLabel.innerText = innerText;
        button.appendChild(icon);
        return button
    }

    render() {
        const counter = document.createElement("div");
        counter.id = this.#id;
        counter.className = "counter";

        const countDiv = document.createElement("div")
        countDiv.className = "counter__count";
        countDiv.innerText = this.#count;

        const removeIcon = document.createElement("span");
        removeIcon.className = "material-symbols-outlined";
        removeIcon.innerText = "remove"

        const addIcon = document.createElement("span");
        addIcon.className = "material-symbols-outlined";
        addIcon.innerText = "add"

        // create increment and decrement buttons
        const incrementButton = Counter.#createButton("counter__increment", addIcon, this.increment.bind(this));
        const decrementButton = Counter.#createButton("counter__decrement", removeIcon, this.decrement.bind(this));

        // structure
        counter.appendChild(decrementButton);
        counter.appendChild(countDiv);
        counter.appendChild(incrementButton);

        return counter;
    }

    mount(el = document.body) {
        if (this.#isMounted) {
            console.warn(document.getElementById(this.#id), "is already mounted!")
            return;
        }
        this.#isMounted = true;
        el.appendChild(this.render());
    }
}

export { Counter };