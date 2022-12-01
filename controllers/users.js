const mongoose = require("mongoose")
const { serialize } = require("v8")
const User = require("../models/User")

const findAll = (req, res) => {
    User.find((err, users) => {
        err && res.status(500).send(err.message)

        res.status(200).json(users)
    })
}

const findById = (req, res) => {
    User.findById(req.params.id, (err, user) =>{
        err && res.status(500).send(err.message);

        res.status(200).json(user);
    })
}

const addUser = (req, res) => {

    let user = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    });
    user.save((err, usr) => {
        err && res.status(500).send(err.message);

        res.status(200).json(usr);
    })
}

const editar = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await User.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}


const eliminar = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findByIdAndDelete(id)
        res.send(`El usuario de ${data.name} fue eliminado`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = { findAll, findById, addUser, editar, eliminar }

