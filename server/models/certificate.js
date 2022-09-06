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
      certificate.belongsTo(models.register);
      certificate.hasOne(models.category);
    }
  }
  certificate.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    date: DataTypes.DATE,
    place: DataTypes.STRING,
    registerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'certificate',
  });
  return certificate;
};