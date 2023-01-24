function copy1(obj) {
    let copiedObj = {}
    for (const key in obj) {
        copiedObj[key] = obj[key];
    }
    return copiedObj;
}


function copy(obj) {
    // if (typeof obj !== "object") {
    //     return obj;
    // }
    let copiedObj = {};
    if (Array.isArray(obj)) {
        copiedObj = [];
    }
    for (const key in obj) {
        // if obj[key] is another object, does this create a ref? Yes
        // shallow vs deep
        // copiedObj[key] = obj[key];
        if (typeof obj[key] === "object") {
            copiedObj[key] = copy(obj[key])
        }
        else {
            copiedObj[key] = obj[key]
        }
    }
    return copiedObj;
}

let address = {
    street: "4th",
    landmark: "Some landmark",
    postCode: "E1AN05",
}

let person = {
    id: 56,
    email: "person@example.com",
    address: address,
}

// console.log("Copying 1 level deep object")
console.log(person)
console.log(copy(person))
address.postCode = undefined;
// console.log(person)
// console.log(copy(person))
