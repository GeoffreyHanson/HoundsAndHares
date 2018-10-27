module.exports = (sequelize, DataTypes) => {
  const Move = sequelize.define("Move", {
    space: DataTypes.STRING,
    piece: DataTypes.STRING,
    player: DataTypes.STRING,
    lateralMoves: {
      type: DataTypes.INTEGER,
      autoIncrement: true
    }
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
