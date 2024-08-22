const http = require("node:http");
const fs = require('node:fs');
const diseredPort = process.env.PORT ?? 8000;

const processRequest = (req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    res.end("Bienvenido a mi página de inicio");
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.end("Contact");
  } else if (req.url === '/imagen'){
    fs.readFile('./src/assets/ejemplo.png',(err, data) => {
      if(err){
        res.statusCode = 500
        res.end('<h1>Internal server error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }

    })
  }
  console.log("Empezando");
};

const server = http.createServer(processRequest);

server.listen(diseredPort, () => {
  console.log(
    `Servidor escuchando por el puerto http://localhost:${diseredPort}`
  );
});

module.exports = {
  server,
};
