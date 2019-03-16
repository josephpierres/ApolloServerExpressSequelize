module.exports = (sequelize, Sequelize) => {
  const pilote = sequelize.define('Pilote', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nom: Sequelize.STRING,
    adresse: Sequelize.STRING,
    salaire: {
      type: Sequelize.FLOAT
    }
  }, 
  {
   freezeTableName: true, //pou non tab yo pa ekri o pliriel
    timestamps: true, //
    paranoid: true
   } );
   pilote.associate =  (models) => pilote.hasMany(models.Vol)
  
  return pilote;
}