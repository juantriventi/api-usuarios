const UserController = require("../controllers/users")
const express = require("express")

const router = express.Router()

//localhost:8080/all GET
router.get("/all",UserController.findAll)

//localhost:8080/:id GET
router.get("/:id",UserController.findById)

//localhost:8080/add POST
router.post("/add",UserController.addUser)

//localhost:8080/:id PATCH
router.patch("/:id",UserController.editar)

//localhost:8080/:id DELETE
router.delete("/:id", UserController.eliminar)


module.exports = router