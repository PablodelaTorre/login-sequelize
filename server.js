const express = require("express")
const routes = require('./src/routes/index.js')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/', routes)



const PORT = process.env.PORT || 8082

app.listen(PORT, () => {
    console.log(`Escuchando servidor en el puerto ${PORT}`)
})