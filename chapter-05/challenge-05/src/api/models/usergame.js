"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserGame extends Model {
    static associate(models) {
      UserGame.hasOne(models.UserGameBiodata, {
        foreignKey: "userId",
      });
      UserGame.hasMany(models.UserGameHistory, {
        foreignKey: "userId",
      });
    }
  }
  UserGame.init(
    {
      publicId: DataTypes.UUID,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "UserGame",
      paranoid: true,
    }
  );
  return UserGame;
};
