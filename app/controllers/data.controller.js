const { sequelize } = require("../models");
const db = require("../models");
const Post = db.post;
const User = db.user;
const Album = db.album;
const Comment = db.comment;
const Op = db.Sequelize.Op;


exports.usersData = async (req, res) => {

    let results = await User.findAll({
        include: [{
            model: Post
        },{
            model: Album
        }]
    })
    // res.send(data);
    res.send(results)
}