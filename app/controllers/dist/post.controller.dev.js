"use strict";

var _require = require("../models"),
    sequelize = _require.sequelize;

var db = require("../models");

var Post = db.post;
var Comment = db.comment;
var User = db.user;
var Op = db.Sequelize.Op; // let name = 'nice';
// let username = 'nice';
// let email = 'nice';
// let phone = 'nice';
// let website = 'nice';
// let address = 'nice';
// User.create({  name: `${name}`,
//     username: `${username}`,
//     email: `${email}`,
//     phone: `${phone}`,
//     website: `${website}`,
//     address: `${address}`,
// })
// Create and Save a new User

exports.create = function (req, res) {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  } // Create a Post


  var post = {
    title: req.body.title,
    contents: req.body.contents,
    published: req.body.published ? req.body.published : false,
    userId: req.body.userId
  }; // Save Post in the database

  Post.create(post).then(function _callee(data) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res.send(data);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Post."
    });
  });
}; // Retrieve all Posts from the database.


exports.findAll = function (req, res) {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  // Post.findAll({ where: condition })
  Post.findAll({
    include: [{
      model: Comment
    }]
  }).then(function (data) {
    res.send(data);
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving posts."
    });
  });
}; // Find a single Post with an id


exports.findOne = function (req, res) {
  var id = req.params.id;
  Post.findOne({
    where: {
      id: id
    },
    include: [{
      model: Comment
    }]
  }).then(function (data) {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: "Cannot find Post with id=".concat(id, ".")
      });
    }
  })["catch"](function (err) {
    res.status(500).send({
      message: "Error retrieving Post with id=" + id
    });
  });
}; // Update a Post by the id in the request


exports.update = function (req, res) {
  var id = req.params.id;
  Post.update(req.body, {
    where: {
      id: id
    }
  }).then(function (num) {
    if (num == 1) {
      res.send({
        message: "Post was updated successfully."
      });
    } else {
      res.send({
        message: "Cannot update Post with id=".concat(id, ". Maybe Post was not found or req.body is empty!")
      });
    }
  })["catch"](function (err) {
    res.status(500).send({
      message: "Error updating Post with id=" + id
    });
  });
}; // Delete a Post with the specified id in the request


exports["delete"] = function (req, res) {
  var id = req.params.id;
  Post.destroy({
    where: {
      id: id
    }
  }).then(function (num) {
    if (num == 1) {
      res.send({
        message: "Post was deleted successfully!"
      });
    } else {
      res.send({
        message: "Cannot delete Post with id=".concat(id, ". Maybe Post was not found!")
      });
    }
  })["catch"](function (err) {
    res.status(500).send({
      message: "Could not delete Post with id=" + id
    });
  });
};

exports.deleteAll = function (req, res) {
  Post.destroy({
    where: {},
    truncate: false
  }).then(function (nums) {
    res.send({
      message: "".concat(nums, " Posts were deleted successfully!")
    });
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while removing all posts."
    });
  });
}; // find all published Post


exports.findAllPublished = function (req, res) {
  Post.findAll({
    where: {
      published: true
    }
  }).then(function (data) {
    res.send(data);
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving posts."
    });
  });
};