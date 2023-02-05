import Component from "./Component.js";
import el from "./element.js";
import Header from "./components/header/Header.js";
import Product from "./components/product/Product.js";
import ProductList from "./components/product-list/ProductList.js";

class Store {
    #value;
    #subscribers;

    constructor(value, subscribers = []) {
        this.#value = value;
        this.#subscribers = subscribers;
    }

    get value() {
        return this.#value;
    }

    setValue = (cb) => {
        // this.#value = val;
        this.#value = cb(this.#value);
        this.#subscribers.forEach(subscriber => {
            subscriber(this.#value);
        });
    }

    addSubscriber = (subscriber) => {
        this.#subscribers.push(subscriber);
    }

    setSubscribers = (subscribers) => {
        this.#subscribers = subscribers;
    }
}

class App extends Component {
    constructor() {
        super();
        this.store = {
            cartItemsCount: new Store(0),
            cartItems: new Store({}),
            cartPrice: new Store(0)
        }
        // this.state.cartItemsCount.addSubscriber((val) => console.log(val));
    }

    render() {
        const product = new Product(
            {
                cartItemsCount: this.store.cartItemsCount,
                cartItems: this.store.cartItems,
                cartPrice: this.store.cartPrice,
            },
            {
                id: 1,
                title: "Malkist Chocolate Flavoured Crunchy Layered Crackers : 138 gms",
                image: "./assets/images/products/3.jpg",
                price: 25,
                mrp: "$45"
            }
        );
        const product2 = new Product(
            {
                cartItemsCount: this.store.cartItemsCount,
                cartItems: this.store.cartItems,
                cartPrice: this.store.cartPrice,
            },
            {
                id: 2,
                title: "Malkist Chocolate Flavoured : 138 gms",
                image: "./assets/images/products/3.jpg",
                price: 45,
                mrp: "$65"
            }
        );
        return el(
            "div#app",
            [
                new Header({
                    cartItemsCount: this.store.cartItemsCount,
                    cartItems: this.store.cartItems,
                    cartPrice: this.store.cartPrice
                }).render(),
                el("main", [
                    el("div#display", [
                        new ProductList().render()
                    ]),
                    el("div#sidebar")
                ])
            ]
        )
    }
}


const app = new App();
app.mount(document.getElementById("root"));


