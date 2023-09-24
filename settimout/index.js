function longTask() {
    let total = 0
    for (let i = 0; i < 100 * 100 * 10; i++) {
        for (let j = 0; j < 100 * 10; j++) {
            total = total + i + j;
        }
    }
    console.log("total", total);
}

function init() {
    let s = Date.now() / 1000;
    setTimeout(() => {
        let x = Date.now() / 1000;
        console.log("called timeout", x - s);
    });
    setImmediate(() => {
        let x = Date.now() / 1000;
        console.log("called setImmediate", x - s);
    });
    longTask();
    longTask();
    longTask();
    longTask();
    console.log("called end", (Date.now() / 1000) - s);
}

// document.addEventListener("DOMContentLoaded", () => {
init();
// })