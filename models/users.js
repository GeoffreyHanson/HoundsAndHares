module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    games: DataTypes.STRING,
    firebaseId: DataTypes.STRING
  });
  return User;
};
