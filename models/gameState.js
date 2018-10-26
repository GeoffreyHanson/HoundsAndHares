// module.exports = (sequelize, DataTypes) => {
//   const GameState = sequelize.define("GameState", {
//     turn: {
//       type: DataTypes.STRING,
//       defaultValue: "black"
//     },
//     gameComplete: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false
//     },
//     blackWins: {
//       type: DataTypes.INTEGER,
//       defaultValue: 0
//     },
//     whiteWins: {
//       type: DataTypes.INTEGER,
//       defaultValue: 0
//     },
//     // Should this be done on the front end?
//     moveLog: {
//       type: DataTypes.STRING
//     },
//     // For non-advancing black moves, 10 = loss
//     moveCount: {
//       type: DataTypes.INTEGER,
//       defaultValue: 0
//     }
//   });
//   return GameState;
// };
