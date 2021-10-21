module.exports = app => {

    const data = require("../controllers/data.controller.js");

    var router = require("express").Router();
  
    router.get("/", data.usersData);
    
    
    app.use('/api/data', router);
};
