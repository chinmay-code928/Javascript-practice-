// // first API request
// let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log("data1= ",data);    //you can use (data.fact)
//         return fetch(url);
//     })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data2) => {
//         console.log("data2= ",data2);
//     })
//     .catch((err) => {
//         console.log("ERROE-", err);
//     });


// // Another example api use fetch with async/await function
// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);
//     } catch (e) {
//         console.log("error-", e);
//     }
//     console.log("bye");
// }


// axios create cat fact
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let fact = await getFacts();
    let p = document.querySelector("#result");
    p.innerText = fact;
});

let url = "https://catfact.ninja/fact";
async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("error-", e);
        return "No fact found";
    }
}