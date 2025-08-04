import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

// Express organiza por precedencia de rotas, ou seja, as rotas são chamadas em sequencia.
// assim devemos adicionar conforme a complexidade, da maior para menor
routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/busca", LivroController.listarLivrosPorEditora);
routes.get("/livros/:id", LivroController.deletarLivroPorId);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.deletarLivroPorId);

export default routes;
