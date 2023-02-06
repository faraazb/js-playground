import Component from "../../Component.js";
import el from "../../element.js";

export default class Cart extends Component {
    constructor(props) {
        super();
        this.appStore = props.store;
        this.appStore.cartItemsCount.addSubscriber(this.updateCartCountView);
        this.appStore.cartItems.addSubscriber(this.updateCartView);
        this.appStore.cartPrice.addSubscriber(this.updateCartPriceView);
    }

    updateCartCountView = (count) => {
        document.querySelector(".cart__title").innerText = `Items (${count.toString()})`
    }

    updateCartPriceView = (price) => {
        document.querySelector(".cart .cart__total").innerText = `₹${price.toString()}`;
    }


    updateCartView = (itemsCount) => {
        let prods = []
        Object.entries(itemsCount).forEach(([id, count]) => {
            if (count !== 0) {
                const product = this.appStore.products.value[id];
                prods.push(
                    el("div.cart__item", [
                        el("div.item__title", product.title),
                        el("div.item__count", `(x${count.toString()})`),
                        el("div.item__total", `₹${count * product.price}`)
                    ])
                )
            };
        })
        document.querySelector(".cart__items").replaceChildren(...prods);
    }

    render = () => {
        return (
            el("div.cart", [
                el("h2.cart__title", `Items (${this.appStore.cartItemsCount.value.toString()})`),
                el("div.cart__items"),
                el("div.cart__footer", [
                    el("div.cart__hr"),
                    el("div.cart__total", `₹${this.appStore.cartPrice.value.toString()}`)
                ])
            ])
        )
    }
}