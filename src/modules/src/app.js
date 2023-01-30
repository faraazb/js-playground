import { Employee } from "./Employee.js";
import { Counter } from "./components/Counter.js"

const soumik = {
    id: "13",
    name: "Soumik Paul",
    profileImage: "assets/images/Soumik.png",
    introduction: "2x ICPC regionalist and first runner-up at Techsurf 2022.",
    profileLink: "https://soumik43.github.io/Portfolio/",
}

const employee = new Employee(soumik);
employee.printWelcome();

const root = document.getElementById("root");

const counter = new Counter();
counter.mount(root);

console.log(counter);