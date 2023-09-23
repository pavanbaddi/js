importScripts("../lib/functions.js", "../lib/posts.js");


self.onmessage = async ({ data: { action, payload } }) => {
    let response = null;
    if (action === "LOAD_POSTS") {
        const post = new Posts();
        response = await post.load()
    }
    postMessage(response);
}

