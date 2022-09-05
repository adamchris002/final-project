'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class certificate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      certificate.belongsTo(models.vaccine_register);
      certificate.hasOne(models.vaccine_category);
    }
  }
  certificate.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    date: DataTypes.DATE,
    place: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'certificate',
  });
  return certificate;
};