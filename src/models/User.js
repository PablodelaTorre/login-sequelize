'use strict';
// const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: "El nombre solo puede contener letras"
        },
        len: {
          args: [2,255],
          msg: "El nombre debe tener al menos 2 caracteres"
        }
      }
    },
    password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: {
              len: {
                args: [6, 255],
                msg: "La contraseña debe tener al menos 6 caracteres"
              }
            }
          }
    },
    email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: {
              msg: "El email tiene que ser un correo válido"
            }
          }
    },      
  }, {tableName: "users"})

  user.associate = function(models) {

  }
  // class User extends Model {
  //   /**
  //    * Helper method for defining associations.
  //    * This method is not a part of Sequelize lifecycle.
  //    * The `models/index` file will call this method automatically.
  //    */
  //   static associate(models) {
  //     // define association here
  //   }
  // }
  // User.init({
  //   name: {
  //     type: DataTypes.STRING,
  //     allowNull: false
  //   },
  //   password: {
  //     type: DataTypes.STRING,
  //     allowNull: false
  //   },
  //   email: {
  //     type: DataTypes.STRING,
  //     allowNull: false
  //   },
  // }, {
  //   sequelize,
  //   modelName: 'users',
  // });
  return user;
};