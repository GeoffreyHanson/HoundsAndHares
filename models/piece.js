module.exports = (sequelize, DataTypes) => {
  const Piece = sequelize.define("Piece", {
    pieceName: DataTypes.STRING,
    space: DataTypes.STRING,
    startSpace: DataTypes.STRING
  });

  // Seeds for starting places

  Piece.sync().then(() => {
    Piece.create({
      pieceName: "houndOne",
      space: "",
      startSpace: "t2"
    });
    Piece.create({
      pieceName: "houndTwo",
      space: "",
      startSpace: "m1"
    });
    Piece.create({
      pieceName: "houndThree",
      space: "",
      startSpace: "b2"
    });
    Piece.create({
      pieceName: "hare",
      space: "",
      startSpace: "m3"
    });
  });
  return Piece;
};
