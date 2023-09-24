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
    setTimeout(() => {
        console.log("called settimeout");
    })
    setImmediate(() => {
        console.log("called setImmediate");
    })
    process.nextTick(() => {
        console.log("called process nextTick");
    });

    longTask();
    longTask();
    longTask();
    longTask();
}

init();