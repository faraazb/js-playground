import Component from "./Component.js";

class ProjectCard extends Component {
    #data;

    constructor(data) {
        super();
        this.#data = data;
    }

    render() {
        const { title, description, image, links } = this.#data;
        const project = document.createElement("div");
        project.className = "project";

        // titlebar -- titlebar
        const titlebar = document.createElement("div");
        titlebar.className = "project__title-box";
        const titlebarButtons = document.createElement("div");
        titlebarButtons.className = "project__lights";
        ["red", "yellow", "green"].forEach((color) => {
            const div = document.createElement("div");
            div.className = `light light--${color}`
            titlebarButtons.appendChild(div);
        });
        const projectTitle = document.createElement("span");
        projectTitle.innerText = title;
        titlebar.appendChild(titlebarButtons);
        titlebar.appendChild(projectTitle)

        // image -- projectImageDiv
        const projectImageDiv = document.createElement("div");
        projectImageDiv.className = "project__image";
        const projectImage = document.createElement("img");
        projectImage.src = image;
        projectImage.alt = "project screenshot";
        projectImageDiv.appendChild(projectImage);

        // desc -- projectDescDiv
        const projectDescDiv = document.createElement("div");
        projectDescDiv.className = "project__description-box"
        const projectDesc = document.createElement("p");
        projectDesc.innerText = description;
        projectDescDiv.appendChild(projectDesc);

        // links -- projectLinks
        const projectLinks = document.createElement("div");
        projectLinks.className = "project__actions";
        links.forEach(({title, href}) => {
            const link = document.createElement("a");
            link.className = "button";
            link.target = "_blank";
            link.innerText = title;
            link.href = href;
            projectLinks.appendChild(link);
        });


        project.append(titlebar, projectImageDiv, projectDescDiv, projectLinks);

        return project;
    }
}


export { ProjectCard }
