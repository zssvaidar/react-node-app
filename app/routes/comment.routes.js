module.exports = app => {

    const comments = require("../controllers/comment.controller.js");

    var router = require("express").Router();
  
    router.get("/", comments.comments);
    router.get("/:uuid", comments.userComments);

    
    router.post("/", comments.create);
    
    
    app.use('/api/comments', router);
};
