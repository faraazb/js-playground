// import { faker } from 'skypack/@faker-js/faker';
import { faker } from 'jsdelivr/npm/@faker-js/faker/+esm';
// import {faker} from "https://cdn.jsdelivr.net/npm/@faker-js/faker/+esm";
// import { elements } from "module-specifier"

// import() op dynamic import can be used even without a module script
// (async function() {
//     const { faker } = await import("jsdelivr/npm/@faker-js/faker/+esm");
// })();

function Employee(id, firstName, lastName, email, sex) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.sex = sex;
    return this;
}

function createRandomEmployee() {
    const id = faker.datatype.uuid();
    const sex = faker.name.sexType();
    const firstName = faker.name.firstName(sex);
    const lastName = faker.name.lastName(sex);
    const email = faker.internet.email(firstName, lastName);
    return new Employee(id, firstName, lastName, email, sex);
}

function createRandomEmployees(count = 1) {
    let employees = [];
    for (let i = 0; i < count; i++) {
        employees.push(createRandomEmployee());
    }
    return employees;
}

console.log(createRandomEmployees(5))
