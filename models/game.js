module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define("Game", {
    player1: DataTypes.STRING, // UserIds go here
    player2: DataTypes.STRING, // and here
    ongoing: DataTypes.BOOLEAN,
    full: DataTypes.BOOLEAN
  });

  Game.associate = models => {
    Game.hasMany(models.Move, {
      onDelete: "cascade"
    });
  };
  return Game;
};
