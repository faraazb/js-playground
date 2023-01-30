import { generateUniqueId } from "../utils.js";
import Component from "./Component.js";

class Header extends Component {

    // constructor() {
    //     super();
    // }

    render() {
        const container = document.createElement("header");
        container.id = this.id;
        const logo = document.createElement("div");
        logo.id = "logo"
        logo.innerText = "Faraaz Biyabani"
        container.appendChild(logo);
        return container;
    }
}

export { Header };
