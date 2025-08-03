import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

const rotas = {
  "/": "Curso de Express API",
  "/livros": "Rota Livros",
  "/autores": "Rota autores",
};

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-type": "text/plain" });
//   res.end(rotas[req.url]);
// });

app.listen(PORT, () => {
  console.log("servidor escutando!");
});
