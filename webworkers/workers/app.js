console.log("Inside worker app.js", self);

self.onmessage = ({ data: { action, payload } }) => {
    let response = null;
    if (action === "GET_NAME_OF_USER") {
        response = payload.user.name
    }
    postMessage(response);
}