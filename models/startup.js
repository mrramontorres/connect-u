module.exports = (sequelize, DataTypes) => {
  const Startup = sequelize.define("startup_profile", {
    startupName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    startupWebsite: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    startupCity: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    startupState: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    startupIndustry: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    startupStage: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    startupNotes: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    startupStatus: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    // startupProfileId: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1, 100],
    //   },
    // },
  });

  Startup.associate = (models) => {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Startup.hasMany(models.Post, {
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

  return Startup;
};
