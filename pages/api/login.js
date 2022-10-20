import connectDb from "../../middleware/mongoose";

const jwt = require("jsonwebtoken");
import { setCookie } from "cookies-next";

const handler = async (req, res) => {
  if (!req.body) {
    console.log(">>>", req.body);
    res.status(401).send("Unauthorized");
  } else {
    const { username, password } = req.body;
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      res.status(200).send("Admin Logged in");
    } else {
      res.status(401).send("Unauthorized");
    }
  }
};

export default connectDb(handler);
