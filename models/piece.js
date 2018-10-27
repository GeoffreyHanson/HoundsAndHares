module.exports = (sequelize, DataTypes) => {
  const Piece = sequelize.define("Piece", {
    pieceName: DataTypes.STRING,
    cx: DataTypes.STRING,
    cy: DataTypes.STRING
  });

  // Seeds for starting places.
  // Should probably do this on the front end.
  Piece.sync().then(() => {
    Piece.create({
      pieceName: "houndOne",
      cx: "250",
      cy: "50"
    });
    Piece.create({
      pieceName: "houndTwo",
      cx: "100",
      cy: "200"
    });
    Piece.create({
      pieceName: "houndThree",
      cx: "250",
      cy: "350"
    });
    Piece.create({
      pieceName: "hare",
      cx: "400",
      cy: "200"
    });
  });
  return Piece;
};
