const path = require("path");

module.exports = app => {
  // Load index page
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/test.html"));
  });

  // app.get("/", (req, res) => {
  //   res.sendFile(path.join(__dirname, "../public/in`"));
  // });

  // Load example page and pass in an example by id
  // app.get("/game", (req, res) => {
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });

  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => {
    res.render("404");
  });
};
