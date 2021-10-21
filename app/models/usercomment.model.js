module.exports = (sequelize, Sequelize) => {
    const Usercomment = sequelize.define("usercomment", {
       
    }, {sequelize, modelName: 'usercomment'});

  return Usercomment;
};
