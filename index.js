 const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("🚀 CI/CD using GitHub Actions is Running and Succesfully done CI CD workflow assignment!!!!!!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});