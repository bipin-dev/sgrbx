const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "sugarbox";
const client = new MongoClient(url);

const connectDB = () => {
  client.connect((err) => {
    if (err) {
      console.log("Error while connecting to mongo: ", err);
      return;
    }
    console.log("Connected successfully to mongo ");
    db = client.db(dbName);
    // client.close();
  });
};

module.exports = { connectDB };
