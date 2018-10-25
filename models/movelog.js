module.exports = (sequelize, DataTypes) => {
  const Move = sequelize.define("Move", {
    piece: DataTypes.STRING,
    code: DataTypes.STRING,
    player: DataTypes.INTEGER
  });
  return Move;
};
