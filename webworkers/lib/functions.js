function doGet(url) {
    return fetch(url).then((res) => res.json()).catch((e) => {
        throw e
    });
}