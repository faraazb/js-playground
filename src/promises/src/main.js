function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}


// const regularly = (timeout) => new Promise((resolve, reject) => setInterval(resolve, 2000))


// const drinkWater = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (randomIntFromInterval(1, 6) < 4) {
//             resolve("Hydrated");
//         }
//         else {
//             reject("Missed");
//         }
//     }, 2000);
// });


// drinkWater.then((val) => console.log(val)).catch((reason) => console.log(reason))

// const drinkWater = new Promise((resolve, reject) => {
//     if (randomIntFromInterval(1, 6) < 4) {
//         resolve("Hydrated");
//     }
//     else {
//         reject("Missed drinking water")
//     }
// })


// regularly(2000).then(drinkWater).then((val) => console.log(val)).catch((reason) => console.log(reason));

// regularly(1000).then(() => console.log("hello"))

const headerDataUrl = "https://vikasrangaswamy.github.io/Contentstack/data/Header.json";

fetch(headerDataUrl).then((response) => response.json()).then((data) => console.log(data)).catch((err) => console.error(err));