module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define("Game", {
    whoseTurn: DataTypes.STRING,
    houndPlayer: DataTypes.STRING, // UserIds go here
    harePlayer: DataTypes.STRING, // and here
    houndOne: {
      type: DataTypes.STRING,
      defaultValue: "t2"
    },
    houndTwo: {
      type: DataTypes.STRING,
      defaultValue: "m1"
    },
    houndThree: {
      type: DataTypes.STRING,
      defaultValue: "b2"
    },
    hare: {
      type: DataTypes.STRING,
      defaultValue: "m3"
    },
    lateralMoves: DataTypes.INTEGER
  });
  return Game;
};
