module.exports = (sequelize, DataTypes) => {
  const White = sequelize.define("White", {
    location: {
      type: DataTypes.STRING,
      defaultValue: "f"
    }
  });
  return White;
};
