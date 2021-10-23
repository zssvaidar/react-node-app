module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
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
             
    }, {sequelize, modelName: 'user'});
    
    User.associate = (models) => {
        User.hasMany(models.post, { foreignKey: 'userId' })
        User.hasMany(models.album, { foreignKey: 'userId' })
        User.belongsToMany(models.comment, {through: models.usercomment, foreignKey: 'userID'})
    }


  return User;
};
