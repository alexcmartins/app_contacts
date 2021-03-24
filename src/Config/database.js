const { Sequelize } = require('sequelize');
const { nameBD, userName, password } = require('./key');

/*Configuração da conexão com o banco de dados*/
const connection = new Sequelize(`${nameBD}`, `${userName}` , `${password}`, {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = { connection, Sequelize };