"use strict";

module.exports = function (sequelize, Sequelize) {
  var User = sequelize.define("user", {
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
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false
    },
    website: {
      type: Sequelize.STRING,
      allowNull: true
    },
    role: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: 'Editor'
    },
    address: {
      type: Sequelize.STRING,
      allowNull: true
    }
  }, {
    sequelize: sequelize,
    modelName: 'user'
  });

  User.associate = function (models) {
    User.hasMany(models.post, {
      foreignKey: 'userId'
    });
    User.hasMany(models.album, {
      foreignKey: 'userId'
    });
    User.belongsToMany(models.comment, {
      through: models.usercomment
    });
  };

  return User;
};