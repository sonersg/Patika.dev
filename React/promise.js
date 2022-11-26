

// setTimeout(() => {
//     console.log("Soneeeeeeeeeeeerrrr")
// }, 2000);



// setInterval(() => {
//     console.log("Soner")
// }, 3000);



// const sayHi = (cb) => cb();
// sayHi(() => console.log("Hello"));



import axios from "axios";
import { resolve } from "path";

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data)=> data.json())
//     .then((users) => console.log("users installed", users));

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((data)=> data.json())
//     .then((users) => console.log("post1 :", users));

// fetch("https://jsonplaceholder.typicode.com/posts/2")
//     .then((data)=> data.json())
//     .then((users) => console.log("post2 :", users));



// async function getData() {
//     const users = await (
//         await fetch("https://jsonplaceholder.typicode.com/users")
//     ).json()

//     const post1 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     ).json()

//     const post2 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/2")
//     ).json()

//     console.log(users);
//     console.log(post1);
//     console.log(post2);

// }
// getData();


// anonim function
// (() => console.log("Selam"))();

(async () => {
    const {data: users} = await axios("https://jsonplaceholder.typicode.com/users")

    const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/1")

    const {data: post2} = await axios("https://jsonplaceholder.typicode.com/posts/2")

    console.log(users);
    console.log(post1);
    console.log(post2);
})();




const getComments = () => {
    return new Promise((resolve, reject) => {
        console.log("comments");
        resolve("comments");
    });
}
getComments().then((data) => console.log(data)).catch((e)=>console.log(e));
