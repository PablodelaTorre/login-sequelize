const {Router} = require("express")
const router = Router()
const AuthController = require('../controllers/AuthController.js')

const {signIn, signUp} = AuthController

router.get('/', (req,res) => {
    res.send('Va bien')
})

router.post('/api/signin', signIn)
router.post('/api/signup', signUp)


module.exports = router