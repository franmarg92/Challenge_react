const { DataTypes } = require("sequelize");
const { dbConfig } = require("../Config");

const taskModel = dbConfig.sequelize.define("Task", {
  id_task: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: true,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  complete: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  timestamps: false 
});

module.exports = taskModel;