const appWorker = new Worker("./workers/app.js");
const apiWorker = new Worker("./workers/api.js");
// console.log("created worker appWorker: ", appWorker);

// appWorker.postMessage({
//     "action": "GET_NAME_OF_USER",
//     "payload": {
//         "user": {
//             "name": "Pavan"
//         }
//     }
// });


// appWorker.onmessage = (message) => {
//     console.log("bundle.js appWorkeronmessage: ", message.data)
// }


fetch("https://jsonplaceholder.typicode.com/posts");

apiWorker.postMessage({
    "action": "LOAD_POSTS"
});

apiWorker.onmessage = (message) => {
    console.log("bundle.js apiWorker onmessage: ", message.data)
}