console.log("Hello World")
document.write("Hello World")
// for (let i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// const animals = [
//     ["bear", "lion", "duck", "tiger"],
//     ["whale", "chiken", "cat"],
//     ["dog", "goat", "sheep"]
// ];

// for (let i = 0; i < animals.length; i++) {
//     const animal = animals[i]
//     console.log(i)
//     for (let j = 0; j < animal.length; j++) {
//         console.log(animal[j])
//     }

// }

let secretNum = Math.floor(Math.random() * 20 + 1);
let num = prompt("Enter your number:")
let again = 1;
while (true) {
    if (num == secretNum) {
        console.log(`your chat numbers:${again}`)
        break
    } else if (num <= secretNum) {
        num = prompt("too low. try again.");
        again += 1;
    } else if (num >= secretNum) {
        num = prompt("too high. try again.");
        again += 1;
    } else if (num == "q") {
        console.log("QUIT")
        break
    } else {
        num = prompt("not number. try again.");
        again += 1;
    }
}