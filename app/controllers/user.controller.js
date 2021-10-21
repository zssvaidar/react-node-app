const { sequelize } = require("../models");
const db = require("../models");
const Post = db.post;
const User = db.user;
const Album = db.album;
const Op = db.Sequelize.Op;

exports.users = async (req, res) => {
    let results = await User.findAll({
    })
    // res.send(data);
    res.send(results)
}

exports.create = async (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  
    const user = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        website: req.body.website,
        address: req.body.address,
    };

  // Save User in the database
  User.create(user)
    .then(async data => {
     
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Users."
      });
    });
}

exports.userData = async (req, res) => {
    
    const uuid = req.params.uuid;
    
    let results = await User.findAll({
        where: {
            uuid: uuid
        },
        include: [{
            model: Post
        },{
            model: Album
        }]
    })
    // res.send(data);
    res.send(results)
}