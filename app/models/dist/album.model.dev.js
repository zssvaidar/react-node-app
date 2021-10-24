"use strict";

module.exports = function (sequelize, Sequelize) {
  var Album = sequelize.define("album", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    picture: {
      type: Sequelize.STRING
    },
    pictures: {
      // type: Sequelize.ARRAY(Sequelize.STRING)
      type: Sequelize.STRING,
      allowNull: false,
      get: function get() {
        return this.getDataValue('pictures').split(';');
      },
      set: function set(val) {
        this.setDataValue('pictures', val.join(';'));
      }
    },
    description: {
      type: Sequelize.STRING
    },
    userId: {
      type: Sequelize.UUID,
      allowNull: false
    }
  }, {
    sequelize: sequelize,
    modelName: 'album'
  });

  Album.associate = function (models) {
    Album.belongsTo(models.user, {
      foreignKey: 'userId'
    });
  };

  return Album;
};