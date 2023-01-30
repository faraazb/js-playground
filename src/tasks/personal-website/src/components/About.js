import Component from "./Component.js";
import { Note } from "./Note.js";

class About extends Component {
    #data;

    constructor(data) {
        super();
        this.#data = data;
    }

    render() {
        const { title, description, image, note } = this.#data;
        const section = document.createElement("section");
        section.id = "about";

        const aboutNote = new Note(note, ["postit--pos"]);

        const aboutImg = document.createElement("img");
        aboutImg.src = image;
        aboutImg.className = "peep peep--hello";
        aboutImg.alt = "Sketched illustration";

        const about = document.createElement("div");
        about.className = "about";

        const aboutTitle = document.createElement("h2");
        aboutTitle.className = "heading--2"
        aboutTitle.innerText = title;

        const aboutDesc = document.createElement("p");
        aboutDesc.innerText = description;

        about.appendChild(aboutTitle);
        about.appendChild(aboutDesc);

        aboutNote.mount(section);
        section.appendChild(aboutImg);
        section.appendChild(about);

        return section;
    }
}


export { About };
