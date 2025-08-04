import { autor } from "../models/Autor.js";

class AutorController {
  static async listarAutores(req, res) {
    try {
      const listarAutores = await autor.find({});
      res.status(200).json(listarAutores);
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - falha na requisição ao buscar os autores`,
      });
    }
  }

  static async listarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      res.status(200).json(autorEncontrado);
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - falha na requisição ao buscar o autor`,
      });
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res
        .status(201)
        .json({ message: "Autor criado com sucesso!", autor: novoAutor });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao cadastrar Autor` });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Autor atualizado!" });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - falha ao atualizar o Autor`,
      });
    }
  }

  static async deletarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findByIdAndDelete(id);
      // res.status(204).json({ message: "autor deletado com sucesso!" });
      res.status(200).json({ message: "Autor deletado com sucesso!" });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - falha exclusão do autor`,
      });
    }
  }
}

export default AutorController;
