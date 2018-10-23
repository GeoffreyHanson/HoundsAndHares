module.exports = (sequelize, DataTypes) => {
  const Black = sequelize.define("Black", {
    location1: {
      type: DataTypes.STRING,
      defaultValue: "b"
    },
    location2: {
      type: DataTypes.STRING,
      defaultValue: "a"
    },
    location3: {
      type: DataTypes.STRING,
      defaultValue: "d"
    }
  });
  return Black;
};
