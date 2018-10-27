const db = require("../models");

module.exports = app => {
  app.get("/", (req, res) => {
    res.redirect("/api/gamestart");
  });

  app.get("/api/gameStart", (req, res) => {
    db.Piece.findAll({}).then(dbPiece => {
      res.json(dbPiece);
    });
  });

  app.put("/api/piece/:id", (req, res) => {
    db.Piece.update(
      {
        spot: req.body.spot
      },
      {
        where: {
          id: req.body.id
        }
      }
    ).then(dbPiece => {
      res.json(dbPiece);
    });
  });
};
