const gamesModel = require("../models/games.json")

const getGames = (request, response) => {
    response.status(200).send(gamesModel)
}

const changeGamePUT = (request, response) => {

        const gameChanged = request.body
        const id = request.params.id

        const gamesId = gamesModel.map(game => game.id)
        const updateId = gamesId.indexOf(id)
        const gameUpdate = {id, ...gameChanged}

        gamesModel.splice(updateId, 1, gameUpdate)

        response.status(200).send(gamesModel.find(game => game.id === id))
        console.log(gamesModel)
}

const changeGamePATCH = (request, response) => {

    const gameChanged = request.body
    const id = parseInt(request.params.id)

    const gameToChange = gamesModel.find(game => game.id === id) 

    Object.keys(gameChanged).forEach(key => {
        gameToChange[key] = gameChanged[key]
    })

    response.status(200).send(gamesModel.find(game => game.id === id))
}


module.exports = {
    getGames,
    changeGamePUT,
    changeGamePATCH
}