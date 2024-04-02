const express = require('express');
const app = express();
const controllers = require("./controllers");

app.use(express.static("public"));

app.get("/home", controllers.getHomePage)
app.get("/info", controllers.getInfoPage)
app.get("/api/users", controllers.getUsers)
app.get("/api/posts/:username", controllers.getPosts)


const port = 8080;
app.listen(port, () => {
    console.log("Server running on port", port)
})