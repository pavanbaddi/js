const { parentPort } = require("worker_threads")

function calculateCount() {
    let counter = 0;
    for (let i = 0; i < 20_000; i++) {
        counter++;
    }
    return counter;
}

parentPort.onmessage = ({ data: { action } }) => {
    let response = null
    if (action === "CALCULATE_COUNT") {
        response = calculateCount()
    }
    parentPort.postMessage(response)
}