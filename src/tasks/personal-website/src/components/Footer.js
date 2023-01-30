import Component from "./Component.js";
import { Note } from "./Note.js";

class Footer extends Component {
    #data;

    constructor(data) {
        super();
        this.#data = data;
    }

    render() {
        const { description, image, note } = this.#data;

        const footer = document.createElement("footer")
        footer.id = "footer";
        const imageDiv = document.createElement("div");
        const img = document.createElement("img");
        img.src = image;
        img.className = "peep peep--cycling";
        imageDiv.appendChild(img);

        const content = document.createElement("div");
        content.className = "footer__content";
        // hack for formatting
        let desc = description.replaceAll(". ", ".<br> ");
        desc = desc.replace("mfaraazb@gmail.com", `<span class="link">mfaraazb@gmail.com</span>`);
        content.innerHTML = desc;

        const contactNote = new Note(note, ["postit--pos-2"]);

        footer.append(imageDiv, content);
        contactNote.mount(footer);

        return footer;
    }
}

export { Footer };
