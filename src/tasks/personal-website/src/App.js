import Component from "../src/components/Component.js"
import { Header } from "./components/Header.js";
import { Introduction } from "./components/Introduction.js";
import { About } from "./components/About.js";
import { ProjectCard } from "./components/ProjectCard.js";
import { Note } from "./components/Note.js";
import { ContactLink } from "./components/ContactLink.js";
import { Footer } from "./components/Footer.js";


let API_URL = `${window.location.protocol}//${window.location.host}/src/tasks/personal-website/`
if (window.location.host === "faraazb.github.io") {
    API_URL = window.location;
}


class App extends Component {
    #data;

    constructor(data) {
        super();
        this.#data = data;
    }

    render() {
        // const { intro, about, projects, contact, footer, notes } = this.#data;
        const data = this.#data;
        // app container - extra?
        const appContainer = document.createElement("div");
        appContainer.id = this.id;


        // header
        const header = new Header();

        // main content container
        const container = document.createElement("div");
        container.className = "container";
        const content = document.createElement("main");

        // introduction
        const introduction = new Introduction(data.intro);
        
        // about
        const about = new About(data.about);
        
        // projects
        const projectsSection = document.createElement("section")
        projectsSection.id = "projects";
        const projectsDiv = document.createElement("div");

        const projectsHeading = document.createElement("h2");
        projectsHeading.className = "heading--2";
        projectsHeading.innerText = data.projects.title;
        projectsDiv.appendChild(projectsHeading);

        const projects = document.createElement("div");
        projects.className = "projects";

        data.projects.entries.forEach((entry) => {
            const project = new ProjectCard(entry);
            project.mount(projects);
        });
        projectsDiv.appendChild(projects);

        // projects note
        const projectsNote = new Note(data.projects.note, ["postit--pos-1"])
        projectsSection.appendChild(projectsDiv);
        projectsNote.mount(projectsSection);

        // contact
        const contactSection = document.createElement("section");
        contactSection.id = "contact";
        const contactDiv = document.createElement("div");
        contactDiv.className = "contact"
        const contactHeading = document.createElement("h2");
        contactHeading.className = "heading--2";
        contactHeading.innerText = data.contact.title;

        const contactLinks = document.createElement("ul");
        contactDiv.append(contactHeading, contactLinks)
        contactSection.appendChild(contactDiv)

        contactLinks.className = "contact__links";
        data.contact.entries.forEach((entry) => {
            const link = new ContactLink(entry);
            link.mount(contactLinks);
        });


        // footer
        const footer = new Footer(data.footer);

        // structure
        header.mount(appContainer)
        container.appendChild(content);
        
        introduction.mount(content)
        about.mount(content);
        content.append(projectsSection, contactSection);

        footer.mount(container);

        appContainer.appendChild(container);

        return appContainer;
    }
}

const root = document.getElementById("root")

fetch(`${API_URL}data/data.json`)
    .then((response) => response.json()
        .then((data) => {
            const app = new App(data);
            app.mount(root);
        }))