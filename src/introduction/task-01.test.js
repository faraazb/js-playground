const tests = [
    {
        test: "copySimple",
        data: {
            firstName: "Faraaz",
            lastName: "Biyabani"
        },
        run: true,
    },
    {
        test: "copyNested",
        data: {
            firstName: "Faraaz",
            lastName: "Biyabani",
            address: {
                street: "4th"
            }
        },
        run: true,
    },
    {
        test: "copyNestedObjArray",
        data: {
            firstName: "Faraaz",
            lastName: "Biyabani",
            addresses: [{ street: "4th" }, "NA"]
        },
        run: true,
    },
    {
        test: "copyNestedObjFunction",
        data: {
            firstName: "Faraaz",
            lastName: "Biyabani",
            address: () => "Some address"
        },
        run: true,
    },
    {
        test: "copyArray",
        data: [1, 2, 3],
        run: true,
    },
    {
        test: "copyArrayObjects",
        data: [{ some: "more", prop: "val" }, { person: "1", age: 54 }],
        run: true,
    }
];

function test(fx, data) {
    console.log("Copying", data);
    console.log("Copied", fx(data));
}

function runTests(fx) {
    for (const t of tests) {
        if (t.run) {
            console.log("Running test:", t.test);
            test(fx, t?.data);
        }
    }
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
        if (typeof obj[key] === "object") {
            copiedObj[key] = copy(obj[key])
        }
        else {
            copiedObj[key] = obj[key]
        }
    }
    return copiedObj;
}

console.log(runTests(copy))
// console.log(tests[3]);


// let something = 5;
// let anything = copy(something);
// something = 6;
// console.log(anything);
// console.log(something);


// let mycopy = copy(tests[2].data)
// tests[2].data.addresses = undefined;
// console.log(tests[2].data);
// console.log(mycopy);


// let addr = {
//     street: "4th",
//     landmark: "Some landmark",
//     postCode: "E1AN05",
// }

// let per = {
//     id: 56,
//     email: "person@example.com",
//     address: addr,
// }

// addr.street = "5th";
// console.log(per);