import Component from "./Component.js";

class Introduction extends Component {
    #data;

    constructor(data) {
        super();
        this.#data = data;
    }

    render() {
        const { title, description, image } = this.#data;
        const section = document.createElement("section");
        section.id = "intro"

        // about -- hello
        const introHello = document.createElement("div")
        introHello.className = "hello"
        const helloTitle = document.createElement("h1");
        helloTitle.className = "title";
        helloTitle.innerText = title
        const helloDesc = document.createElement("p");
        helloDesc.className = "description";
        helloDesc.innerText = description;
        introHello.appendChild(helloTitle);
        introHello.appendChild(helloDesc);

        // about -- photo
        const introPhoto = document.createElement("div");
        introPhoto.className = "photo";
        const img = document.createElement("img");
        img.id = "profile-photo";
        img.alt = "Faraaz's photo";
        img.src = image;
        introPhoto.appendChild(img);

        section.appendChild(introHello);
        section.appendChild(introPhoto);
        return section;
    }
}

export { Introduction };
