const JokeController = require("../controllers/joke.controller");

module.exports = app =>{
    app.get("/api/jokes", JokeController.findAllJokes),
    app.post("/api/jokes/create", JokeController.createJoke),
    app.get("/api/jokes/:id", JokeController.findOneJoke),
    app.put("/api/jokes/update/:id", JokeController.updateOneJoke),
    app.delete("/api/jokes/delete/:id", JokeController.deleteJoke)

}