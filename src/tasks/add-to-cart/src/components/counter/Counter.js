import Component from "../../Component.js";
import el from "../../element.js";
import { icon } from "../../element.js";
import { add, remove, subtract } from "../../icons.js";
import { generateUniqueId } from "../../utils.js";

export default class Counter extends Component {
    constructor(count = 0, setCountCb) {
        super();
        this.count = 0;
        this.id = generateUniqueId({ prefix: "counter" });
        this.setCountCb = setCountCb
    }

    increment = () => {
        this.count += 1;
        this.setCountCb(this.count);
        this.updateCounterView(this.count - 1, this.count);
    }

    decrement = () => {
        this.count -= 1;
        this.setCountCb(this.count);
        this.updateCounterView(this.count + 1, this.count);
    }

    reset = () => {
        this.count = 0;
        this.setCountCb(this.count);
        this.updateCounterView(0, this.count);
    }

    updateCounterView = (prevCount, nextCount) => {
        if (nextCount === 0) {
            document.getElementById(this.id).replaceChildren(
                el("button.increment.primary", { onClick: this.increment }, [
                    el("span", "Add to Cart")
                ])
            )
        }
        else if (prevCount === 0 && nextCount === 1) {
            document.getElementById(this.id).replaceChildren(
                el("button.increment", { onClick: this.increment }, [
                    icon("span.icon", add)
                ]),
                el("div.count", this.count.toString()),
                el("button.decrement", { onClick: this.decrement }, [
                    icon("span.icon", subtract)
                ]),
                el("button.remove", { onClick: this.reset }, [
                    icon("span.icon", remove)
                ])
            )
        }
        const countVal = document.querySelector(`#${this.id} .count`);
        if (countVal) countVal.innerText = nextCount;
    }

    render() {
        return el(
            `div#${this.id}.counter`, [
            el("button.increment.primary", { onClick: this.increment }, [
                el("span", "Add to Cart")
            ])
        ]
        )
    }
}