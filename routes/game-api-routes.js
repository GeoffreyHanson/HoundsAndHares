// const db = require("../models");

// module.exports = app => {
//   app.get("/", (req, res) => {
//     res.redirect("/api/gameStart");
//   });

//   app.get("/api/gameStart", (req, res) => {
//     db.Game.findAll({
//       // include: [db.Move],
//       // order: [["createdAt", "ASC"]]
//     }).then(dbGame => {
//       res.json(dbGame);
//     });
//   });

//   // Choosing one game
//   app.get("/api/games/:id", (req, res) => {
//     db.Game.findOne({
//       where: {
//         id: req.body.id
//       }
//     }).then(dbGame => {
//       const hbsObject = {
//         game: dbGame
//       };
//       return res.render("index", hbsObject);
//     });
//   });

//   // We have to do one of these for every hound and hare
//   app.put("/api/games/:id", (req, res) => {
//     db.Game.update(
//       {
//         houndOne: req.body.houndOne
//       },
//       {
//         where: {
//           id: req.params.id
//         }
//       }
//     ).then(dbGame => {
//       const hbsObject = {
//         game: dbGame
//       };
//       return res.render("index", hbsObject);
//     });
//   });

//   app.put("/api/houndOne", (req, res) => {
//     db.Game.update(
//       {
//         houndOne: req.body.houndOne,
//         houndTwo: req.body.houndTwo
//       },
//       {
//         where: {
//           id: req.params.id
//         }
//       }
//     ).then(dbGame => {
//       const hbsObject = {
//         game: dbGame
//       };
//       return res.render("index", hbsObject);
//     });
//   });
// };
