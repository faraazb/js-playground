
class Counter {
    constructor() {
        this.count = 0;
    }

    incrementCount() {
        this.count = this.count - 1;
    }

    decrementCount() {
        this.count = this.count - 1;
    }

    updateCount() { }

    render() {
        const counterContainer = document.createElement("div");
        const counterHeading = document.createElement("h1");
        const counterValue = document.createElement("p");
        const incrementButton = document.createElement("button");
        const decrementButton = document.createElement("button");

        // add classes and ids
        counterContainer.classList.add("counterContainer");
        counterHeading.classList.add("counterHeading");
        counterValue.id = "counterValue";
        incrementButton.id = "increment";
        decrementButton.id = "decrement";

        // add inner elements
        counterHeading.innerText = "Counter";
        counterValue.innerText = `count : ${this.count}`
        incrementButton.innerText = "+";
        decrementButton.innerText = "-";

        // structure
        counterContainer.appendChild(counterHeading);
        counterContainer.appendChild(counterValue);
        counterContainer.appendChild(incrementButton);
        counterContainer.appendChild(decrementButton);

        return counterContainer;
    }

    mount(el) {
        const container = el || document.body;
        container.appendChild(this.render());
    }
}

export { Counter };