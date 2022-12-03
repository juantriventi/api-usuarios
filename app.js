const express = require ("express")
const mongoose = require ("mongoose")
const bodyParser = require ("body-parser")
const Users = require("./api/users")
const models = require("./models/User")
const { Router } = require("express")


const app = express()

app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())



// set the view engine to ejs
app.set('view engine', 'ejs');
app.set("views", __dirname + "/public");

// muestra la vista index.ejs y usa modelo de la bd

app.get('/', (req, res) => {
    models.find(function (err, found){
        if (err){
            console.log(err)
        }else {
            res.render("index", { users:found })
        }
    })
})
    

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