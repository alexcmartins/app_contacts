const express = require('express');
const Contacts = require('../Models/Contacts');
const router = express.Router();

router.get('/', async(req, res) => {
    try {
        //var currency = req.params.currency
        res.status(200).send('Seja bem vindo!!')
    } catch (error) {
        console.error(error)
    }
    
});

module.exports = router;