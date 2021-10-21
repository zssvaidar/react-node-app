module.exports = (sequelize, Sequelize) => {
  const Album = sequelize.define("album", {
    picture: {
      type: Sequelize.STRING
    },
    pictures: {
      // type: Sequelize.ARRAY(Sequelize.STRING)
        type: Sequelize.STRING,
        allowNull: false,
        get() {
            return this.getDataValue('pictures').split(';')
        },
        set(val) {
          this.setDataValue('pictures',val.join(';'));
        },
    },
    description: {
      type: Sequelize.STRING
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
  }, {sequelize, modelName: 'album'});

  Album.associate = (models) => {
      Album.belongsTo(models.user, { foreignKey: 'userId'})
  }
  
  return Album;
};
