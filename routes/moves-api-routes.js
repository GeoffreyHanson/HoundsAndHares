// const db = require("../models");

// module.exports = app => {
//   app.get("/", (req, res) => {
//     res.redirect("/starting");
//   });

//   // app.get("/api/starting", (req, res) => {
//   //   db.piece.findAll({}).then(startSpace => {
//   //     // However we want to format the site such that this will assign a value
//   //     // updating the location. This is using the burger app example format.
//   //     const hbsObject = {
//   //       space: startSpace
//   //     };
//   //     return res.render("index", hbsObject);
//   //   });
//   // });

//   app.post("/api/moves", (req, res) => {
//     db.Move.create({
//       space: req.body.space,
//       piece: req.body.piece,
//       player: req.body.player
//     }).then(dbMove => {
//       res.json(dbMove);
//     });
//   });

//   // Starting location for pieces
//   app.get("/api/starting", (req, res) => {
//     db.Piece.findAll({}).then(pieces => {
//       res.json(pieces);
//       // console.log(pieces);
//     });
//   });

//   // Updating the locations of pieces
//   app.put("/api/current", (req, res) => {
//     db.Piece.update(
//       {
//         spot: req.body.spot
//       },
//       {
//         where: {
//           id: req.body.id
//         }
//       }
//     ).then(piece => {
//       res.json(piece);
//     });
//   });

//   // Better to use this or seeds in models?
//   // app.post("/api/example", (req, res) => {
//   //   db.Example.create(req.body).then(dbExample => {
//   //     res.json(dbExample);
//   //   });
//   // });

//   // Delete an example by id
//   app.delete("/api/examples/:id", (req, res) => {
//     db.Example.destroy({ where: { id: req.params.id } }).then(dbExample => {
//       res.json(dbExample);
//     });
//   });
// };
