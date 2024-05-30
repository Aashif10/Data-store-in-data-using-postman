let express = require("express");
const { PORT } = require("./config");
const connectDB = require("./config/database");
const listRouter = require("./Router/listRouter");
let userRouter = require("./Router/userRouter");
let app = express();

let StartServer = async () => {
  // Database connection
  connectDB();
  app.use(express.json());
  app.use("/list", listRouter);
  app.use("/user", userRouter);

  //listen server
  app.listen(PORT, err => {
    if (err) throw err;
    console.log(`Server running at http://localhost:${PORT}`);
  });
};
StartServer();
