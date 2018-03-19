
'use strict'
module.exports = (sequelize, DataTypes) => {
  var Applications = sequelize.define('Applications', {
    id: { type: DataTypes.INTEGER, field: 'id', primaryKey: true },
    software_id: DataTypes.INTEGER,
    approver_id: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'applications'
  })

  // Applications.associate = function (models) {
  //   models.Applications.belongsTo(models.User, {
  //     foreignKey: 'id'
  //   })
  // }

  return Applications
}
