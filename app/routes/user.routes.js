module.exports = app => {

    const users = require("../controllers/user.controller.js");

    var router = require("express").Router();
  
    router.get("/", users.users);

    
    router.post("/", users.create);

    router.post("/login", users.login);
    
    
    router.get("/:id", users.userData);
    
    
    app.use('/api/users', router);
};
