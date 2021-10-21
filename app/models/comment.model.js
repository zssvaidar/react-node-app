module.exports = (sequelize, Sequelize) => {
    
    var User = require('./user.model.js')
  const Comment = sequelize.define("comment", {
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
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        userID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            // references: {
            //     model: 'user',
            //     key: 'id',
            // }
        }

    }, {sequelize, modelName: 'comment'});

    Comment.associate = (models) => {
        Comment.belongsTo(models.post, { foreignKey: 'postId'})
        Comment.belongsTo(models.user, { through: models.usercomment, foreignKey: 'userID'})
    }
  
  return Comment;
};
