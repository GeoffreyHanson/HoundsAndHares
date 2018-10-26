module.exports = (sequelize, DataTypes) => {
  const Space = sequelize.define("Space", {
    code: DataTypes.STRING,
    piece: DataTypes.STRING,
    occupied: {
      type: Boolean,
      defaultValue: false
    }
  });

  Space.sync().then(() => {
    Space.create({
      code: "t2",
      piece: "houndOne",
      occupied: true
    });
    Space.create({
      code: "t3",
      piece: "",
      occupied: false
    });
    Space.create({
      code: "t4",
      piece: "",
      occupied: false
    });
    Space.create({
      code: "m1",
      piece: "houndOne",
      occupied: true
    });
    Space.create({
      code: "m2",
      piece: "",
      occupied: false
    });
    Space.create({
      code: "m3",
      piece: "hare",
      occupied: true
    });
    Space.create({
      code: "m4",
      piece: "",
      occupied: false
    });
    Space.create({
      code: "m5",
      piece: "",
      occupied: false
    });
    Space.create({
      code: "b2",
      piece: "houndThree",
      occupied: true
    });
    Space.create({
      code: "b3",
      piece: "",
      occupied: false
    });
    Space.create({
      code: "b4",
      piece: "",
      occupied: false
    });
  });
  return Space;
};
