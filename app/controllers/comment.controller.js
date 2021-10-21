const { sequelize } = require("../models");
const db = require("../models");
const Post = db.post;
const User = db.user;
const Comment = db.comment;
const Op = db.Sequelize.Op;

exports.comments = async (req, res) => {
    let results = await Comment.findAll({
    })
    // res.send(data);
    res.send(results)
}

exports.userComments = async (req, res) => {
    const uuid = req.params.uuid;
    
    let results = await Comment.findAll({
        where: {
            uuid: uuid
        },
        // include: [{
        //     model: Comment,
        //     include: [User]
        // }]
        include: [{
          model: Post,
          include: [User]
        }, {
          model: User,
        }]
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

  
    const comment = {
        name: req.body.name,
        email: req.body.email,
        text: req.body.text,
        postId: req.body.id,
        userID: req.body.userId,
    };

  // Save User in the database
  Comment.create(comment)
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