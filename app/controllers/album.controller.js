const { sequelize } = require("../models");
const db = require("../models");
const User = db.user;
const Album = db.album;
const Op = db.Sequelize.Op;

exports.albums = async (req, res) => {
    let results = await Album.findAll({
    })
    // res.send(data);
    res.send(results)
}

exports.create = async (req, res) => {
    if (!req.body.picture) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }

    
    const album = {
        picture: req.body.picture,
        pictures: req.body.pictures.split(';'),
        description: req.body.description,
        userId: req.body.userId
    };

    // Save User in the database
    Album.create(album)
        .then(async data => {
        
        res.send(data)
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Album."
        });
        });
}