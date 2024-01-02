const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static(__dirname));

app.get("/", (_, response) => {
    response.sendFile( path.join(__dirname,  "./index.html" ));
});

app.listen(PORT);
console.log("Server running");