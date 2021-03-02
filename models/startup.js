module.exports = (sequelize, DataTypes) => {
  const startupProfiles = sequelize.define("startupProfiles", {
    startup_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    startup_website: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    startup_city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    startup_state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    startup_industry: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    startup_stage: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
  });

  startupProfiles.associate = (models) => {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    startupProfiles.hasMany(models.Post, {
      onDelete: "cascade",
    });
  };
  //   Startup.associate = (models) => {
  //     // We're saying that a Post should belong to an Author
  //     // A Post can't be created without an Author due to the foreign key constraint
  //     Startup.belongsTo(models.vc.js, {
  //       foreignKey: {
  //         allowNull: false,
  //       },
  //     });
  //   };

  return startupProfiles;
};
