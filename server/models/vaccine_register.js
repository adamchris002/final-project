'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vaccine_register extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      vaccine_register.belongsTo(models.user)
      vaccine_register.hasOne(models.certificate)
    }
  }
  vaccine_register.init({
    name: DataTypes.STRING,
    nik: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    ktp_image: DataTypes.STRING,
    place: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'vaccine_register',
  });
  return vaccine_register;
};