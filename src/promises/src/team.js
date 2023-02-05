const URL = "https://vikasrangaswamy.github.io/Contentstack/";


class Team {
    constructor(members) {
        this.members = members;
    }

    render() {
        const team = document.createElement("div");
        const heading = document.createElement("div")
        heading.className = "team-heading"

        const cards = document.createElement("cards");

        this.members.forEach((member) => {
            const card = new EmployeeCard(member);
            card.mount(cards);
        });

        return team
    }
}


fetch(`${URL}data/Card.json`)
    .then((response) => response.json())
    .then((data) => {
        data.forEach(element => {
            const employee = new EmployeeCard(element);
            employee.mount();
        });
    })

class EmployeeCard {
    constructor(data) {
        this.data = data;
    }

    render() {
        const {name, profileImage, introduction, profileLink} = this.data;

        const card = document.createElement('div');
        card.classList.add("card");

        const header = document.createElement('div');
        header.classList.add("card-header");

        const imageContainer = document.createElement('div');
        imageContainer.classList.add("card-img");

        const image = document.createElement('img');
        image.src = URL + profileImage;
        image.alt = name;

        const title = document.createElement('h3');
        title.innerText = name;

        const contentContainer = document.createElement('div');
        contentContainer.classList.add("card-content");

        const content = document.createElement('p');
        content.innerText = introduction;

        const link = document.createElement('a');
        link.href = profileLink;
        link.innerText = "Know more";
        link.target = "_blank";
        link.classList.add("card-link");

        // structure
        card.appendChild(header);
        imageContainer.appendChild(image);
        card.appendChild(imageContainer);
        card.appendChild(title);
        contentContainer.appendChild(content);
        card.appendChild(contentContainer);
        card.appendChild(link);

        return card;
    }

    mount (el = document.body) {
        el.appendChild(this.render());
    }
}
