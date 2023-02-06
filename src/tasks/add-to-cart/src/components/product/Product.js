import Component from "../../Component.js";
import el from "../../element.js";
import { generateUniqueId } from "../../utils.js";
import Counter from "../counter/Counter.js";



export default class Product extends Component {
    constructor({store, id, title, thumbnail, price, mrp, minCount = 0}) {
        super();
        this.appStore = store;
        this.id = generateUniqueId({ prefix: "product" })
        this.productId = id;
        this.title = title;
        this.thumbnail = thumbnail;
        this.price = price;
        this.mrp = mrp;
        this.minCount = minCount;
    }

    setProductCount = (count) => {
        if (count === 0) {
            document.getElementById(this.id).classList.remove("selected");
        }
        else {
            document.getElementById(this.id).classList.add("selected");
        }
        const current = this.appStore.cartItems.value[this.productId] ?? 0;
        this.appStore.cartItemsCount.setValue((val) => val + (count - current));
        this.appStore.cartItems.setValue((val) => {
            return { ...val, [this.productId]: count }
        });
        this.appStore.cartPrice.setValue((val) => val + (this.price * (count - current)));
        return this.appStore.cartItems.value[this.productId];
    }

    render() {
        const { cartItems } = this.appStore;
        return el(
            `div#${this.id}.product`,
            [
                el("div.product__display", [
                    el("img", { src: this.thumbnail, alt: this.title })
                ]),
                el("div.product__info", [
                    el("div.product__title", this.title),
                    el("div.product__pricing", [
                        el("div.product__mrp", [
                            el("del", `₹ ${this.mrp}`)
                        ]),
                        el("div.product__price", `₹${this.price}`),
                        el("div.product__saving", `Save ₹${this.mrp - this.price}`)
                    ])
                ]),
                el("div.product__actions", [
                    el("div.product__counter", [
                        new Counter(
                            cartItems.value[this.productId] ?? this.minCount,
                            this.setProductCount
                        ).render()
                    ])
                ])
            ]
        )
    }
}