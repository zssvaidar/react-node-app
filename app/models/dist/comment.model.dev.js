"use strict";

module.exports = function (sequelize, Sequelize) {
  var User = require('./user.model.js');

  var Comment = sequelize.define("comment", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    text: {
      type: Sequelize.STRING,
      allowNull: false
    },
    postId: {
      type: Sequelize.UUID,
      allowNull: false
    },
    userID: {
      type: Sequelize.UUID,
      allowNull: false // references: {
      //     model: 'user',
      //     key: 'id',
      // }

    }
  }, {
    sequelize: sequelize,
    modelName: 'comment'
  });

  Comment.associate = function (models) {
    Comment.belongsTo(models.post, {
      foreignKey: 'postId'
    });
    Comment.belongsTo(models.user, {
      through: models.usercomment,
      foreignKey: 'userID'
    });
  };

  return Comment;
};