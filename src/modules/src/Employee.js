
// function Employee(emp) {
//     this.id = id;
//     this.name = name;
//     this.profileImage = profileImage;
//     this.introduction = introduction;
//     this.profileLink = profileLink;
// }


// Employee.prototype.printWelcome = function () {
//     console.log("Hello", this.name);
// }

class Employee {
    constructor(emp) {
        this.name = emp.name;
        this.profileImage = emp.profileImage;
        this.introduction = emp.introduction;
        this.profileLink = emp.profileLink;
    }

    printWelcome() {
        console.log("Hello", this.name);
    }
}

export { Employee }
