const {Router} = require("express")
const router = Router()

router.get('/', (req,res) => {
    res.send('Va bien')
})


module.exports = router