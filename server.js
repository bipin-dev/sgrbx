///////////////////////////////////////////////////////////////
//                     SUGARBOX ASSIGNMENT                   //
///////////////////////////////////////////////////////////////

const express = require("express");
const config = require("./config");
const helper = require("./helper");
const { connectDB } = require("./services/DBService");
const users = require("./services/UserService");
const bodyParser = require("body-parser");

const app = express();
var cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
connectDB();

app.get("/name", (req, res) => {
  try {
    res.send(config.appName);
  } catch (error) {
    res.send(error);
  }
});

app.post("/user", async (req, res) => {
  try {
    if (!helper.isValidToken(req.headers)) {
      throw new Error("invalid token");
    }
    await users.save(req.body);
    res.send("user saved successfully ");
  } catch (error) {
    res.send("Error is : " + error);
  }
});

app.get("/user", async (req, res) => {
  try {
    let result = await users.get();
    res.send(result);
  } catch (error) {
    res.send("Error is : " + error);
  }
});

app.delete("/user", async (req, res) => {
  try {
    let id = req.query.id;
    if (!helper.isValidToken(req.headers)) {
      throw new Error("invalid token");
    }
    if (!id) {
      throw new Error("id is not defined");
    }
    await users.delete(id);
    res.send("user deleted successfully ");
  } catch (error) {
    res.send("Error is : " + error);
  }
});

app.listen(config.port, () => {
  console.log(`listening at http://localhost:${config.port}`);
});
