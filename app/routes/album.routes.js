module.exports = app => {

    const albums = require("../controllers/album.controller.js");

    var router = require("express").Router();
  
    router.get("/", albums.albums);
    
    router.post("/", albums.create);
    
    
    app.use('/api/albums', router);
};
