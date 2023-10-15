'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productIngredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      productIngredient.belongsTo(models.product)
      productIngredient.belongsTo(models.ingredient)
    }
  }
  productIngredient.init({
    productId: DataTypes.INTEGER,
    ingredientId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'productIngredient',
  });
  return productIngredient;
};