import Component from "../../Component.js";
import el from "../../element.js";
import { generateUniqueId } from "../../utils.js";
import Counter from "../counter/counter.js";



export default class Product extends Component {
    constructor(state, props) {
        super();
        this.state = state;
        this.id = generateUniqueId({ prefix: "product" })
        this.productId = props.id;
        this.title = props.title;
        this.image = props.image;
        this.price = props.price;
        this.mrp = props.mrp;
        this.minCount = props.minCount ?? 0;
    }

    setProductCount = (count) => {
        const current = this.state.cartItems.value[this.productId] ?? 0;
        this.state.cartItemsCount.setValue((val) => val + (count - current));
        this.state.cartItems.setValue((val) => {
            return { ...val, [this.productId]: count }
        });
        this.state.cartPrice.setValue((val) => val + (this.price * (count - current)));
        return this.state.cartItems.value[this.productId];
    }

    render() {
        const { cartItems } = this.state;
        return el(
            `div#${this.id}.product`,
            [
                el("div.product__display", [
                    el("img", { src: this.image, alt: this.title })
                ]),
                el("div.product__info", [
                    el("div.product__title", this.title),
                    el("div.product__pricing", [
                        el("div.product__mrp", [
                            el("del", `MRP ${this.mrp}`)
                        ]),
                        el("div.product__price", `\$${this.price}`)
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