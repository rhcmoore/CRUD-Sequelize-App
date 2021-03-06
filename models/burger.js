module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });
  return Burger; 
};