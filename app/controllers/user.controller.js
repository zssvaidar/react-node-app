const { sequelize } = require("../models");
const db = require("../models");
const Post = db.post;
const User = db.user;
const Album = db.album;
const Comment = db.comment;
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
        role: req.body.role,
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

exports.login = async (req, res) => {
  // Validate request
  if (!req.body.username && !req.body.password) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  var username = req.body.username;
  var password = req.body.password;
  
   User.findOne({ where: { username: username } })
      .then(function (users) {
        if (!users) {
          res.status(401)
            res.send({ message: 'Incorrect username.' })
            return;
              // return done(null, false, { message: 'Incorrect username.' });
          }
          // if (!users.password === password) {
          if (123 != password) {
            res.status(402)
            res.send({ message: 'Incorrect password.' })
            return;
              // return done(null, false, { message: 'Incorrect password.' });
          }
          res.send(users)
      }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while login-in"
      });
    });

}

exports.userData = async (req, res) => {
    
    const uuid = req.params.uuid;
    
    let results = await User.findOne({
        where: {
            uuid: uuid
        },
        include: [{
            model: Post
        },{
            model: Album
        },{
          model: Comment
        },
        
        ]
    })
    // res.send(data);
    res.send(results)
}