import { render as renderCounter } from "./counter/counter.js";
import { render as renderTimer } from "./timer/timer.js";

// app root
const root = document.getElementById("root");

// container for the app
const tabsContainer = document.createElement("div");
tabsContainer.classList.add("tabs-container");

// tab panel
const panel = document.createElement("div");
panel.className = "panel";

// tabbar
const tabs = document.createElement("div");
tabs.classList.add("tabs");

// tabbar buttons
const tabsButton = [
    {
        id: "counter-tab-button",
        value: "1",
        label: "Counter",
        active: true,
        tabRenderer: renderCounter,
    },
    {
        id: "timer-tab-button",
        value: "2",
        label: "Timer",
        active: false,
        tabRenderer: renderTimer,
    }
];

// by default, render the first tab
let renderTab = tabsButton[0].tabRenderer;

// create tabbar radio buttons
for (const tabButton of tabsButton) {
    // tab radio buttons
    const button = document.createElement("div");
    button.classList.add("tabs__tab-button");
    const input = document.createElement("input")
    input.id = tabButton.id;
    input.value = tabButton.value;
    // render tab using the appropriate render function on click
    input.onclick = () => tabButton.tabRenderer(panel);
    if (tabButton.active) {
        input.checked = true;
        // set the appropriate render function (called in render())
        renderTab = tabButton.tabRenderer;
    }
    input.name = "tab";
    input.type = "radio";

    // input label
    const label = document.createElement("label");
    label.setAttribute("for", tabButton.id);
    label.innerText = tabButton.label;

    // add input and label to tabs__tab-button div
    button.appendChild(input);
    button.appendChild(label);

    // add button to tabbar
    tabs.appendChild(button);
}

const render = function () {
    // append app container to root
    root.appendChild(tabsContainer);
    // append tabbar to container
    tabsContainer.appendChild(tabs);
    // appned tab panel to container
    tabsContainer.appendChild(panel);
    // render a tab in panel
    renderTab(panel);
}

render();
