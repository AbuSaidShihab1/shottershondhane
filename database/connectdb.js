const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://shihabmoni15:smJakICWZNY0Obk2@cluster0.epyv5fl.mongodb.net/?retryWrites=true&w=majority/shottershondhane",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Mongodb connect running...");
  })
  .catch((err) => {
    console.log(err);
  });
