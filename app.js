const express = require("express");
const app = express();
const port = 3001;

app.get("/ciao", (req, res) => res.send("Hello from Render!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
