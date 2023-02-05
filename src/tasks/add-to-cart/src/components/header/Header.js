import Component from "../../Component.js";
import el, { icon } from "../../element.js";
import { account, cart } from "../../icons.js";



export default class Header extends Component {
    constructor(state) {
        super();
        this.state = state;
        this.state.cartItemsCount.addSubscriber(this.updateCartCount);
        this.state.cartPrice.addSubscriber(this.updateCartPrice);
    }

    updateCartCount = (value) => {
        document.querySelector("header .cart__count").innerText = value.toString();
    }

    updateCartPrice = (value) => {
        document.querySelector("header .cart__price").innerText = `$${value.toString()}`
    }

    render() {
        let cartPrice = `$ ${this.state.cartPrice.value.toString()}`
        return el(
            "header",
            [
                el("div#logo", "Mart"),
                el("div.actions", [
                    el("a.actions__account", { href: "#" }, [
                        icon("span.icon.icon--account", account),
                        el("span", "Account")
                    ]),
                    el("a.actions__cart", { href: "#" }, [
                        el("div.cart__icon", [
                            el("div.cart__count", this.state.cartItemsCount.value.toString()),
                            icon("span.icon", cart),
                            el("div.cart__price", cartPrice)
                        ])
                    ])
                ])
            ]
        )
    }
}