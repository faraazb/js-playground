function el(element, innerText,  attrs) {
    let ele = element;
    let id, classNames;
    if (ele.includes("#")) {
        const selector = element.split("#");
        ele = selector[0];
        id = selector[1];
    }
    else if (ele.includes(".")) {
        const selector = element.split(".");
        ele = selector[0];
        classNames = selector.slice(1);
    }
    const e = document.createElement(ele);
    if (id) {
        e.id = id;
    }
    if (classNames) {
        e.classList.add(...classNames);
    }
    if (innerText) {
        e.innerText = innerText;
    }
    if (typeof attrs === "object" && !Array.isArray(attrs) && attrs !== null) {
        for (const [attr, value] of Object.entries(attrs)) {
            // e.setAttribute(attr, value);
            e[attr.toLowerCase()] = value;
        }
    }
    else if (Array.isArray(attrs)) {
        attrs.forEach((f) => e.appendChild(f));
    }
    return e;
}


let count = 1;

const updateCount = function () {
    count += 1;
    console.log(count)
    document.querySelector(".counter").innerText = `Count: ${count}`;
    console.log("hello")
}

const markup = el(
    "div#main",
    [
        el("h1.hello-title", {style: "color: red"}, "Hello!"),
        el("p.bio", {}, "I am Faraaz"),
        el("div.projects", [
            el("div.project-card", {}, "This is project 1"),
            el("div.project-card", {}, "This is project 2"),
            el("div.project-card", {}, "This is project 3")
        ]),
        el("button.counter", {onclick: updateCount}, `Count: ${count}`)
    ]
)

// document.body.appendChild(el("div.hello.world", {"style": "background-color: red", onClick: updateCount}, count));