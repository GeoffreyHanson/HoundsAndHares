// const chai = require("chai");
// // used to make API requests with express?
// const chaiHttp = require("chai-http");
// const server = require("../server");
// const db = require("../models");

// // ?
// const { expect } = chai;

// // Setting up the chai http plugin
// chai.use(chaiHttp);

// let request;

// describe("GET /api/examples", () => {
//   // Before each test begins, create a new request server for testing
//   // & delete all examples from the db
//   beforeEach(() => {
//     request = chai.request(server);
//     // For Travis?
//     return db.sequelize.sync({ force: true });
//   });

//   it("should find all examples", done => {
//     // Add some examples to the db to test with
//     db.Piece.bulkCreate([{ pieceOneLet: "m" }, { pieceOneNum: 5 }]).then(() => {
//       // ACTION
//       // Request the route that returns all examples
//       request.get("/api/examples").end((err, res) => {
//         const responseStatus = res.status;
//         const responseBody = res.body;

//         // Run assertions on the response

//         // Added mocha plugin, but it still won't work.
//         expect(err).to.be.null;

//         expect(responseStatus).to.equal(200);

//         expect(responseBody)
//           .to.be.an("array")
//           .that.has.lengthOf(2);

//         expect(responseBody[0])
//           .to.be.an("object")
//           .that.includes({
//             text: "First Example",
//             description: "First Description"
//           });

//         expect(responseBody[1])
//           .to.be.an("object")
//           .that.includes({
//             text: "Second Example",
//             description: "Second Description"
//           });

//         // The `done` function is used to end any asynchronous tests
//         done();
//       });
//     });
//   });
// });
