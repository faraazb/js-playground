let count = 0;

const incrementCount = () => {
    const countValue = document.getElementById("countValue");
    count = count + 1;
    updateValue();
}

const decrementCount = () => {
    const countValue = document.getElementById("countValue");
    count = count - 1;
    updateValue();
}

const updateValue = () => {
    countValue.innerText = `count : ${count}`
}

const createCounter = () => {
    const counterContainer = document.createElement("div");
    const counterHeading = document.createElement("h1")
    const counterPara = document.createElement("div");
    counterPara.id = "countValue"
    const incrementButton = document.createElement("button");
    const decrementButton = document.createElement("button");

    // add text
    counterHeading.innerText = "Counter"
    counterPara.innerText = `count : ${count}`;
    incrementButton.innerText = "+"
    decrementButton.innerText = "-";

    // add event listeners
    incrementButton.onclick = incrementCount;
    decrementButton.onclick = decrementCount;

    // append elements to container
    counterContainer.appendChild(counterHeading);
    counterContainer.appendChild(counterPara);
    counterContainer.appendChild(incrementButton);
    counterContainer.appendChild(decrementButton);

    document.getElementById("root").appendChild(counterContainer)
}

createCounter();