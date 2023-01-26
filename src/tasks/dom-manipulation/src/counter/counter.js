// helper function to create increment, decrement buttons
const createButton = function (className, innerText, onClick) {
    const button = document.createElement("button");
    button.className = className;
    button.onclick = onClick;
    const buttonLabel = document.createElement("span")
    // buttonLabel.className = "button"
    buttonLabel.innerText = innerText;
    button.appendChild(buttonLabel);
    return button
}

// function to update UI
const handleCountChange = function () {
    const div = document.querySelector(".counter__count");
    div.innerText = state.value;
}

let state = {
    value: 0,
    handleChange: handleCountChange
};

// proxy to wtahc and handle changes on state value
const stateProxy = new Proxy(state, {
    set: (target, key, value) => {
        target[key] = value;
        handleCountChange();
        return true;
    }
});

const counter = document.createElement("div");
counter.className = "counter";

const countDiv = document.createElement("div")
countDiv.className = "counter__count";
countDiv.innerText = state.value;

// create increment and decrement buttons
const incrementButton = createButton("counter__increment", "➕", () => stateProxy.value = state.value + 1);
const decrementButton = createButton("counter__decrement", "➖", () => stateProxy.value = state.value - 1);

counter.appendChild(decrementButton);
counter.appendChild(countDiv);
counter.appendChild(incrementButton);


const resetButton = createButton("counter__reset", "Reset", () => stateProxy.value = 0);


const render = function (container) {
    container.replaceChildren(counter);
    container.appendChild(resetButton);
}


export { render };
