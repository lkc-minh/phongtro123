const express = require("express");
const cors = require("cors");
const connectionDb = require("./config/connectionDb");
require("dotenv").config();

const routes = require("./routes");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectionDb();

app.use("/v1", routes);

const PORT = process.env.PORT || 1998;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
