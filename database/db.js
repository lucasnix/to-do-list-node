const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://root:admin@todolistjs.gyhot.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDB Atlas CONECTADO!"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
