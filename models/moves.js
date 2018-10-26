module.exports = (sequelize, DataTypes) => {
  const Move = sequelize.define("Move", {
    space: DataTypes.STRING,
    piece: DataTypes.STRING,
    player: DataTypes.STRING
  });
  Move.associate = models => {
    Move.belongsTo(models.Game, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Move;
};
