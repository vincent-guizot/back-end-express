'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      company.hasOne(models.profile)
      company.hasMany(models.product)
    }
  };
  company.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Name can not be empty."
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Category can not be empty."
        }
      }
    },
    image: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: function(company, option){
        company.image = "https://via.placeholder.com/150"
      }
    },
    sequelize,
    modelName: 'company',
  });
  return company;
};