const { User } = require('../models/index.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')

module.exports = {
    
    //Login
    signIn(req,res) {

    },

    //Registro
    signUp(req,res) {

        let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

        // Crear usuario
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: password
        }).then(user => {
            let token = jwt.sign({ user: user}, authConfig.secret, {
                expiresIn: authConfig.expires
            })
            res.json({
                user:user,
                token:token
            })
        }).catch(err => {
            res.status(500).json(err)
        })
    }
}