const express = require("express")
const app = express();
const port = 8000;
const cors = require("cors");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//require our other modualrized files (routes and config)
require("./server/config/jokes.config")
require("./server/routes/joke.routes")(app)


app.listen(port, () => console.log(`Listening on port ${port}`));