const express = require ("express")
const mongoose = require ("mongoose")
const bodyParser = require ("body-parser")
const Users = require("./api/users")

const app = express()

app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

app.use("/", Users)

//DB conection
mongoose.connect(
    "mongodb://localhost/usuarios-api",
    { useNewUrlParser: true },
    (err, res) => {
        err && console.log("Error conectando a la BD");
        app.listen(8080, () => {
            console.log("aplicación en el puerto 8080")
        })
    }
)


module.exports = app