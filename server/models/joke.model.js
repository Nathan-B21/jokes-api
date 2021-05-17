const mongoose = require("mongoose")

const JokeSchema = new mongoose.Schema({
    setup:{
        type: String,
        minLength:[10, "Setup must be atleast 10 chars"]
    },
    punchline:{
        type: String,
        minLength:[3, "Punchline must be atleast 3 characters long"]
    }
}, {timestamps:true})

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;