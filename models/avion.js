module.exports = function (sequelize, Sequelize) {
  const avion = sequelize.define('Avion', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    typeAv: {
      type: Sequelize.STRING,
      allowNull: false
    },
    capacite: Sequelize.INTEGER
  }, {
        indexes: [
          // Create a unique index on email
          {
            unique: true,
            fields: ['typeAv']
          }
        ],
        // don't forget to enable timestamps!
        timestamps: true,

        // I don't want createdAt
        //createdAt: false,

        // I want updatedAt to actually be called updateTimestamp
        //updatedAt: 'updateTimestamp'

        // And deletedAt to be called destroyTime (remember to enable paranoid for this to work)
        //deletedAt: 'destroyTime',
        paranoid: true,
        freezeTableName: true
     });

    
      avion.associate = (models) => avion.hasMany(models.Vol, {
          onDelete: 'cascade' // when avion is deleted, delete their vols
        }); 
  
  return avion;
}