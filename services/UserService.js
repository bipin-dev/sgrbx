const helper = require("../helper");
const ObjectId = require("mongodb").ObjectId;

const saveUser = async (data) => {
  console.log("saving the data ");
  let userdata = helper.formatUserData(data);
  return new Promise((resolve, rejects) => {
    db.collection("user")
      .insertOne(userdata)
      .then((result) => {
        console.log(`data is saved successfully `);
        resolve(true);
      })
      .catch((err) => {
        console.error(`Fatal error occurred: ${err}`);
        rejects(err);
      });
  });
};

const getAllUser = async () => {
  console.log("getting the data ");
  return new Promise((resolve, rejects) => {
    db.collection("user")
      .find()
      .toArray((err, result) => {
        if (err) {
          console.error(`Fatal error occurred: ${err}`);
          rejects(err);
          return;
        }
        resolve(result);
      });
  });
};

const deleteUser = async (id) => {
  console.log("deleting the data ");
  return new Promise((resolve, rejects) => {
    db.collection("user")
      .deleteOne({ _id: ObjectId(id) })
      .then((result) => {
        console.log(`deleted successfully`);
        resolve(true);
      })
      .catch((err) => {
        console.error(`Fatal error occurred: ${err}`);
        rejects(err);
      });
  });
};

module.exports = {
  save: saveUser,
  delete: deleteUser,
  get: getAllUser,
};
