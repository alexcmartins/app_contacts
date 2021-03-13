const db = require('../Config/database')

const Contacts = db.connection.define("contacts", {
    name:{
        allowNull: false,
        type: db.Sequelize.STRING
    },
    surname:{
        allowNull: false,
        type: db.Sequelize.STRING
    },
    email:{
        allowNull: false,
        type: db.Sequelize.STRING,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    phone:{
        allowNull: false,
        type: db.Sequelize.STRING
    },
    birthday:{
        type: db.Sequelize.DATE
    },
    notes:{
        type: db.Sequelize.TEXT
    },
});

Contacts.sync({force: false}).then(() =>{
    console.log('Tabela Criada com Sucesso!')
});

module.exports = Contacts;