const express = require("express");
const app = express();
const PORT = process.env.PORT || 80;
const cors = require("cors");
app.use(cors());
require("./db/connection");

app.use(express.json());
app.use(require("./routes"));

app.listen(PORT, () => {
    console.log("App is listening on port ", PORT);
})