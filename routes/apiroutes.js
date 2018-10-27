const db = require("../models");

module.exports = app => {
  // app.get("/", (req, res) => {
  //   res.redirect("/api/gamestart");
  // });

  app.get("/api/gameStart", (req, res) => {
    db.Piece.findAll({}).then(dbPiece => {
      res.json(dbPiece);
    });
  });

  // app.put("/api/pieces", (req, res) => {
  //   db.Piece.update(
  //     {
  //       cx: req.body.cx,
  //       cy: req.body.cy
  //     },
  //     {
  //       where: {
  //         id: req.pieces.id
  //       }
  //     }
  //   ).then(dbPiece => {
  //     res.json(dbPiece);
  //   });
  // });

  app.put("/api/piece/:id", (req, res) => {
    db.Piece.update(
      {
        cy: req.body.cy,
        cx: req.body.cx
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(dbPiece => {
      res.json(dbPiece);
    });
  });
};
