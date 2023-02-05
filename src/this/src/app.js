console.log(this)


const person = {
    name: "something",
    age: function() {
        console.log(this);
    }
}

person.age();