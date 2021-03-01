module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1],
    },
  });

  Post.associate = (models) => {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    //console.log({ models });
    Post.belongsTo(models.startup_profile, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  // Post.associate = (models) => {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   Post.belongsTo(models.Startup, {
  //     foreignKey: {
  //       allowNull: false,
  //     },
  //   });
  // };

  // Post.associate = (models) => {
  //   Post.hasOne(models.vc, {
  //     foreignKey: {
  //       allowNull: false,
  //     },
  //   });
  // };

  return Post;
};
