const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://anyelimit:sh889522@boilerplate-itenq.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(() => console.log(error));

app.get("/", (req, res) => res.send("Hello World"));
app.listen(port, () => console.log(`${port}`));
