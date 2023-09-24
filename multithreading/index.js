const express = require("express");
const { Worker } = require("worker_threads");

const app = express()
const port = 3000;

app.get("/non-blocking", (req, res) => {
    res.status(200).send("This page is non blocking");
})


function calculateCount() {
    return new Promise((resolve, reject) => {
        let counter = 0;
        for (let i = 0; i < 20_000_000_000; i++) {
            counter++;
        }
        resolve(counter);
    });
}

app.get("/blocking", async (req, res) => {
    // const counter = await calculateCount();

    const wk = new Worker("./worker.js");

    wk.postMessage({ action: "CALCULATE_COUNT" })

    wk.on("message", (data) => {
        console.log("This page is blocking: ", data);
        res.status(200).send("This page is blocking: ");
    })
})

app.listen(port, () => {
    console.log("listening to port 3000")
})