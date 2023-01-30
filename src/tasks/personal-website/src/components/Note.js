import Component from "./Component.js";

class Note extends Component {
    #data;

    constructor(data, classList) {
        super();
        this.#data = data;
        this.classList = classList
    }

    render() {
        const { type, content } = this.#data;

        const note = document.createElement("div");
        note.className = "postit";
        if (Array.isArray(this.classList) && this.classList.length > 0) {
            note.classList.add(this.classList);
        }

        if (type === "image") {
            const img = document.createElement("img");
            img.src = content;
            img.alt = "note image";
            note.appendChild(img);
        }
        else if (type === "text") {
            const text = document.createTextNode(content);
            note.appendChild(text);
        }

        return note;
    }
}

export { Note };