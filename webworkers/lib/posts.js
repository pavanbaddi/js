function Posts() {
    this.load = () => {
        return doGet("https://jsonplaceholder.typicode.com/posts")
    }
}