module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("post", {
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    contents: {
      type: Sequelize.STRING,
      allowNull: false
    },
    published: {
      type: Sequelize.BOOLEAN
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }

  }, {sequelize, modelName: 'post'});

  Post.associate = (models) => {
        Post.hasMany(models.comment, { foreignKey: 'postId'});
        Post.belongsTo(models.user, { foreignKey: 'userId'})
  }
  
  return Post;
};
