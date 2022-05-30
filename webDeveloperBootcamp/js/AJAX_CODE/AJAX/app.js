// const req = new XMLHttpRequest()

// req.onload = function () {
//     console.log("done.")
//     const data = JSON.parse(this.responseText)
//     console.log(data.error.message)
//     console.log(data)
// }

// req.onerror = function () {
//     console.log("ERROR")
//     console.log(this)
// }

// req.open("GET", "https://youtubeanalytics.googleapis.com/v2/reports")
// req.send() // XML 사용법 

// fetch("https://youtubeanalytics.googleapis.com/v2/reports")
//     .then(res => {
//         console.log("done.", res)
//         return res.json()
//     })
//     .then((data) => {
//         console.log("url")
//         console.log(data.error.code)
//     })
//     .catch(e => {
//         console.log("error", e)
//     })

// const fetchAsync = async function () {
//     try {
//         const res = await fetch("https://icanhazdadjoke.com/")

//         console.log(res)
//     }
//     catch (e) {
//         console.log("PROBLEM!!!!")
//         console.log(e)
//     }
// }
const jokes = document.querySelector("#jokes");
const getDadJoke = async () => {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke
};

const btn = document.querySelector("#btn");

const getDadJokes = async () => {
    const add = await getDadJoke()
    const newLi = document.createElement("li");
    newLi.append(add);
    jokes.append(newLi);
}
btn.addEventListener("click", getDadJokes)