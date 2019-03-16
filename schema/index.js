const { makeExecutableSchema } = require("graphql-tools");
const { merge } = require("lodash");
const {gql} = require("apollo-server-express");


const typeDefs = gql `

type Avion {
id: ID!
typeAv: String
capacite: Int
vols: [Vol]

}
type Pilote {
  id: ID!
  nom: String
  adresse: String
  salaire: Float
  vols: [Vol!]!
  
}
type Vol {
  id: ID!
  villeDepart: String
  villeArrive: String
  pilote: Pilote!
  avion: Avion!  
}
 type Query {
  pilote(id: ID!): Pilote
  pilotes: [Pilote]
  avion(id: ID!): Avion
  avions: [Avion]!
  vol(id: ID!): Vol
  vols: [Vol!]!
}
`;
const mutations = gql `
type Mutation {
    createPilote(nom: String!, adresse:String!, salaire: Float!): Pilote!
    updatePilote( nom: String, adresse: String, salaire: Float, id: ID): [Int!]!
    deletePilote(id: ID!): Int!
}`;
  
const aviationSchema =  [typeDefs, mutations];
const resolvers = {
  Pilote: {
      vols: async (root, args, { models }, info) =>  root.getVols(), // has many Vols
  },
  Avion: {
    vols: async (root, args, { models }, info) =>  root.getVols(),
},

  Vol: {
    pilote: async (root, args, { models }, info) =>  root.getPilote(),
    avion: async (root, args, { models }, info) =>  root.getAvion()
  },

  Query: {
   
    pilotes: async (root, args, { models }, info) => await models.Pilote.findAll(),
    avions: async (root, args, { models }, info) => await models.Avion.findAll(),
    pilote: async (root, { id }, { models }, info) => await models.Pilote.findById(id),
    avion: async (root, { id }, { models }, info) => await models.Avion.findById(id),
    vol: async (root, { id }, { models }, info) => await models.Vol.find(id),
    vols: async (root, args, { models }, info) => await models.Vol.findAll(),
  },
  Mutation: {
  createPilote: async (parent, { nom, adresse, salaire }, { models }, info) =>
  await db.pilote.create({
    nom,
    adresse,
    salaire
  }),
updatePilote: async (parent, { nom, adresse, salaire, id }, { models }, info) => 
await db.pilote.update({ 
  nom, 
  adresse,
  salaire 
  }, { 
     where: { 
       id
      }
  }),
deletePilote: async (parent, {id}, { models }, info) =>  await db.pilote.destroy({ where: {id: id }})
}
    
};

// glues all schemas and resolvers together
const schema = makeExecutableSchema({
  typeDefs: aviationSchema,    
  resolvers
});

module.exports = schema;