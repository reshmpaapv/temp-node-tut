const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to home page");
  } else if (req.url === "/about") {
    res.end("Give a short history");
  } else {
    res.end(`
        <h1>Oops!!</h1>
        <p>We can't seem to find the page that you are looking for</p>
        <a href='#'>Back to home page</a>`);
  }
  /*  res.write("Welcome to our home page")
    res.end() */
});
server.listen(5000);
