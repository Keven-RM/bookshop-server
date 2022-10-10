import { Request, Response } from "express";
import Book from '../model'

const createBook = async (req: Request, res: Response,) => {
    const { name, author, description, rating } = req.body;
    console.log(req.body);
    
    Book.create({
        name: name,
        author: author,
        description: description,
        rating: rating
    }).then((createdBook) => {
        res.status(200).json(createdBook);
    }).catch(function (err) {
        console.log(err)
        res.status(500).send("Erro ao inserir");
    });
};

const removeBook = async (req: Request, res: Response,) => {
    const { id } = req.body;

    Book.destroy({ where: { id: id } })
        .then((removedBook) => {
            res.status(200).json(removedBook);
        }).catch(function (err) {
            console.log(err)
            res.status(500).send("Erro ao deletar");
        });
};

const updateBook = async (req: Request, res: Response,) => {
    const { id, content } = req.body;

    Book.update(content, { where: { id: id } })
        .then((updatedBook) => {
            if (updatedBook[0] == 1) {
                res.status(200).json(updatedBook);
            } else {
                res.status(204).send(`Não foi possivel atualizar book com id: ${id}`)
            }
        }).catch(function (err) {
            console.log(err)
            res.status(500).send("Erro ao atualizar");
        });
};

const findBook = async (req: Request, res: Response,) => {
    const { id } = req.body;

    Book.findOne({ where: { id: id } })
        .then((foundBook) => {
            foundBook ? res.status(200).json(foundBook) : res.status(404).send("Não há livros com este ID");
        }).catch(function (err) {
            console.log(err)
            res.status(500).send("Erro ao procurar");
        });
};

const listAllBooks = async (req: Request, res: Response,) => {
    Book.findAll()
        .then((Books) => {
            if (Books.length < 1) {
                res.send("A lista de livros está vazia").status(204);
            } else {
                res.status(200).json(Books);
            }
        }).catch(function (err) {
            console.log(err)
            res.status(500).send("Erro ao listar");
        });
};

export default {
    createBook,
    removeBook,
    updateBook,
    findBook,
    listAllBooks
};