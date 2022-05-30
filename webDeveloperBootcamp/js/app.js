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

// let secretNum = Math.floor(Math.random() * 20 + 1);
// let num = prompt("Enter your number:")
// let again = 1;
// while (true) {
//     if (num == secretNum) {
//         console.log(`your chat numbers:${again}`)
//         break
//     } else if (num <= secretNum) {
//         num = prompt("too low. try again.");
//         again += 1;
//     } else if (num >= secretNum) {
//         num = prompt("too high. try again.");
//         again += 1;
//     } else if (num == "q") {
//         console.log("QUIT")
//         break
//     } else {
//         num = prompt("not number. try again.");
//         again += 1;
//     }
// }
// function sumArray(list) {
//     let total = 0;
//     for (let i = 0; i < list.length; i++) {
//         total = list[i]
//     }
//     return total;
// }

try {
    hello.toUpperCase()
} catch (e) {
    console.log(e)
    console.log("ERROR")
}

const names = ["reded", "dedede", "deedededededeed", "ededededwdwdwedwd", "asdasdqwdqwdqwdqwd"]
const str = names.filter(n => {
    return n.length < 10
})
names.forEach(m => {
    return console.log(m)
});

const nums = [3, 2, 1, 5, 3, 2, 0, 2]

const fluxs = nums.reduce((min, num) => {
    if (num < min) {
        return num
    }
    return min
})

const container = document.querySelector("#container")

for (let i = 0; i < 100; i++) {
    const button = document.createElement("button");
    document.body.appendChild(button);
    button.append("Hey!");
    container.appendChild(button)
}



const input = document.querySelector('input');
const h1 = document.querySelector("h1");

input.addEventListener("input", (e) => {
    h1.innerText = input.value;
})


// input.addEventListener("click", function () {
//     const target = document.querySelector('body');
//     if (this.value == 'night') {
//         target.style.backgroundColor = 'black';
//         target.style.color = 'white';
//         this.value = 'day';
//     } else {
//         target.style.backgroundColor = 'white';
//         target.style.color = 'black';
//         this.value = 'night';
//     }
// })




// const fakeRequest = (url, success, fail) => {
//     const time = Math.floor(Math.random() * 5000 + 500)
//     setTimeout(() => {
//         if (time > 3000) {
//             fail(`this fake url: ${url}`)
//             console.log(`${time}ms`)
//         } else {
//             success(`${time}ms`)
//         }
//     }, time);
// }

// fakeRequest("dogs.com", function (response) {
//     console.log("success", response)
// }, function (err) {
//     console.log("fail", err)
// })

const fakePromise = (url) => {
    return new Promise((resolve, reject) => {
        const time = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (time > 3000) {
                reject("do not connecting.")
                console.log(`${time}ms`)
            } else {
                resolve(`here your fake url: ${url}`)
                console.log(`${time}ms`)
            }
        }, time)
    })
}

// fakePromise("dogs.com")
//     .then((data) => {
//         console.log("success")
//         console.log(data)
//         return fakePromise("dogs.com/page1")
//     })
//     .then((data) => {
//         console.log("success (page1)")
//         console.log(data)
//         return fakePromise("dogs.com/page2")
//     })
//     .then((data) => {
//         console.log("success (page2)")
//         console.log(data)
//         return fakePromise("dogs.com/page3")
//     })
//     .then((data) => {
//         console.log("success (page3)")
//         console.log(data)
//     })
//     .catch((data) => {
//         console.log(data)
//         console.log("fail")
//     })

async function fake() {
    let data1 = await fakePromise("dogs.com")
    console.log("hi")
}

fake()