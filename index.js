import http from "http";
import fs from "fs/promises";

const PORT_NUMBER = 8080;

http
  .createServer(function (req, res) {
    switch (req.url) {
      case "/":
        sendHtmlPage("./index.html", res);
        break;
      case "/about":
        sendHtmlPage("./about.html", res);
        break;
      case "/contact-me":
        sendHtmlPage("./contact-me.html", res);
        break;
      default:
        sendHtmlPage("./404.html", res);
        break;
    }
  })
  .listen(PORT_NUMBER, "127.0.0.1");

async function sendHtmlPage(pagePath, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(await fs.readFile(pagePath, "utf-8"));
}

console.log(`Server running on port ${PORT_NUMBER}`);
