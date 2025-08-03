import express from "express";

const app = express();
// Middleware usado para ter acesso as requisicoes e respostas
// Nesse caso executa em todas as requisições que chegam e é "parseado" para json
app.use(express.json());

const livros = [
  {
    id: 1,
    titulo: "O Senhor dos Anéis",
  },
  {
    id: 2,
    titulo: "O Hobbit",
  },
];

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro Cadastrado");
});

export default app;
