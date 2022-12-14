const { User } = require('../models/index.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')

module.exports = {
    
    //Login
    signIn(req,res) {

        let { email, password } = req.body;

        User.findOne({
            where:{
                email:email
            }
        }).then(user => {

            if(!user){
                res.status(404).json({msg:"Usuario con este correo no encontrado"})
            } else {
                if(bcrypt.compareSync(password, user.password)){
                    
                    let token = jwt.sign({ user: user}, authConfig.secret, {
                        expiresIn: authConfig.expires
                    })

                    res.json({
                        user:user,
                        token:token
                    })
                } else {
                    res.status(401).json({msg:"Contraseña incorrecta"})
                }
            }
        }).catch(err => {
            res.status(500).json(err)
        })

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