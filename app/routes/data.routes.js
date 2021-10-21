module.exports = app => {

    const data = require("../controllers/data.controller.js");

    var router = require("express").Router();
  
    router.get("/", data.usersData);

    router.get("/populate", data.populate);

    router.get("/flush", data.flush);

    
    
    app.use('/api/data', router);
};
