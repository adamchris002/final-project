'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class register extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      register.belongsTo(models.user);
      register.hasOne(models.certificate);
    }
  }
  register.init({
    name: DataTypes.STRING,
    nik: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    ktp_image: DataTypes.STRING,
    place: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'register',
  });
  return register;
};