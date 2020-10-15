const express = require("express")
const router = express.Router()
const cors = require("cors")

const gamesController = require("../controllers/gamesController")

//@route GET Games
//@desc Retornar todos os jogos
//@acces Public
//@endpoint http://localhost:porta/jogos
router.get("/jogos", cors(), gamesController.getGames)

//@route PUT Games
//@desc Atualizar todo o jogo que será escolhido pelo id
//@acces Public
//@endpoint http://localhost:porta/jogos/:id
router.put("/jogos/:id", cors(), gamesController.changeGamePUT)

//@route PATCH Games
//@desc Atualizar somente um valor escolhido pelo id
//@acces Public
//@endpoint http://localhost:porta/jogos/:id
router.patch("/jogos/:id", cors(), gamesController.changeGamePATCH)


module.exports = router 