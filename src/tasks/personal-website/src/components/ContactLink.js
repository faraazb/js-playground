import Component from "./Component.js";

class ContactLink extends Component {
    #data;

    constructor(data) {
        super();
        this.#data = data;
    }

    render() {
        const { title, href } = this.#data;
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.className = "contact__link";
        link.href = href;
        link.target = "_blank";
        const linkTitle = document.createElement("span");
        linkTitle.innerText = title;

        const icon = `<svg id="new-tab-icon" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M4.5 17q-.625 0-1.062-.438Q3 16.125 3 15.5v-11q0-.625.438-1.062Q3.875 3 4.5 3H10v1.5H4.5v11h11V10H17v5.5q0 .625-.438 1.062Q16.125 17 15.5 17Zm3.562-4L7 11.938 14.438 4.5H12V3h5v5h-1.5V5.562Z" /></svg>`;
        link.innerHTML = icon;
        link.insertAdjacentElement("afterbegin", linkTitle);

        item.appendChild(link)
        return item;
    }
}

export { ContactLink };
