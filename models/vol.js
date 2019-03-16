module.exports = (sequelize, Sequelize) => {
  const vol = sequelize.define('Vol', {
    //  If you don't define a primaryKey then sequelize uses id by default.
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    villeDepart: Sequelize.STRING,
    villeArrive: Sequelize.STRING,
  }, 
  { 
    freezeTableName: true,
    timestamps: true,
    paranoid: true
  });
  vol.associate = models =>{    
        vol.belongsTo(models.Pilote),
        vol.belongsTo(models.Avion) 
        //{as: AvId, foreignKey:'AId', targetKey: AvionId } in the object, we can overwrite the default foreignKey, target key is the column on the target model
        //they currently only support the targetKey option for belongsTo relations not foreignKey 
      };  
  return vol;
}