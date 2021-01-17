const Sequelize = require('sequelize');

//Clases
const FilmModel = require('../Models/Films');


//Connection 
const sequelize = new Sequelize('basedatos', 'root', 'ydaleu11', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306'
});

//Map classes
const Film = FilmModel(sequelize, Sequelize)

//After mapping
sequelize.sync({ force: false })
    .then(() => {
        console.log('Created tables')
    })




module.exports = {
    Film
}

