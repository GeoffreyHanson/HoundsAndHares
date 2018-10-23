const db = require("../models");

module.exports = app => {
  // Get starting positions for white pieces, however this should route.
  app.get("/api/starting", (req, res) => {
    db.White.findAll({}).then(startLocation => {
      // However we want to format the site such that this will assign a value
      // updating the location. This is using the burger app example format.
      const hbsObject = {
        location: startLocation
      };
      return res.render("index", hbsObject);
    });
  });

  // Starting location for black pieces
  app.get("/api/starting", (req, res) => {
    db.Black.findAll({}).then(startLocation => {
      const hbsObject = {
        location: startLocation
      };
      return res.render("index", hbsObject);
    });
  });

  // Updating the locations of pieces
  app.put("/api/current", (req, res) => {
    db.White.findAll({}).then(newLocation => {});
  });

  // Create a new example
  // Probably won't need this?
  // app.post("/api/example", (req, res) => {
  //   db.Example.create(req.body).then(dbExample => {
  //     res.json(dbExample);
  //   });
  // });

  // Delete an example by id
  app.delete("/api/examples/:id", (req, res) => {
    db.Example.destroy({ where: { id: req.params.id } }).then(dbExample => {
      res.json(dbExample);
    });
  });
};
