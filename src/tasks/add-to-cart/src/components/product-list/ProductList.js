import Component from "../../Component.js";
import el from "../../element.js";
import Product from "../product/Product.js";

export default class ProductList extends Component {
    constructor(props) {
        super();
        this.appStore = props.store;
        this.appStore.products.addSubscriber(this.updateProductsView);
    }

    updateProductsView = (products) => {
        let prods = Object.values(products).map((product) => new Product({
            store: {
                cartItemsCount: this.appStore.cartItemsCount,
                cartItems: this.appStore.cartItems,
                cartPrice: this.appStore.cartPrice,
            },
            ...product
        }).render());
        document.querySelector(".products").append(...prods);
    }

    render = () => {
        return (
            el(
                "div.products"
            )
        )
    }
}