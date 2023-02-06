import Component from "./Component.js";
import el from "./element.js";
import Header from "./components/header/Header.js";
import State from "./State.js";
import ProductList from "./components/product-list/ProductList.js";
import Cart from "./components/cart/Cart.js";

const BASE_URL = "http://127.0.0.1:5500/src/tasks/add-to-cart/";



const getProducts = () => {
    return fetch(`${BASE_URL}data/products.json`)
        .then((response) => response.json())
        .then((products) => {
            let productsMap = {}
            products.forEach((product) => {
                productsMap[product.id] = { ...product, thumbnail: BASE_URL + product.thumbnail }
            });
            return productsMap;
        });
}

class App extends Component {
    constructor() {
        super();
        this.store = {
            cartItemsCount: new State(0),
            cartItems: new State({}),
            cartPrice: new State(0),
            products: new State({})
        }
        // this.state.cartItemsCount.addSubscriber((val) => console.log(val));
        getProducts().then((products) => this.store.products.setValue(() => products))
    }

    render() {
        // const product2 = new Product(
        //     {
        //         id: 2,
        //         title: "Malkist Chocolate Flavoured : 138 gms",
        //         image: "./assets/images/products/3.jpg",
        //         price: 45,
        //         mrp: "$65",
        //         store: {
        //             cartItemsCount: this.store.cartItemsCount,
        //             cartItems: this.store.cartItems,
        //             cartPrice: this.store.cartPrice,
        //         },
        //     }
        // );
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
                        new ProductList({
                            store: {
                                products: this.store.products,
                                cartItemsCount: this.store.cartItemsCount,
                                cartItems: this.store.cartItems,
                                cartPrice: this.store.cartPrice,
                            }
                        }).render(),
                    ]),
                    el("div#sidebar", [
                        new Cart({
                            store: {
                                products: this.store.products,
                                cartItemsCount: this.store.cartItemsCount,
                                cartItems: this.store.cartItems,
                                cartPrice: this.store.cartPrice,
                            }
                        }).render()
                    ])
                ])
            ]
        )
    }
}


const app = new App();
app.mount(document.getElementById("root"));

// getProducts().then((val) => console.log(val))

