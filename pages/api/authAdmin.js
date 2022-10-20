import connectDb from "../../middleware/mongoose";

const jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  const token = res.cookies.jwt;
  if (token) {
    console.log(token);
  }
};

export default connectDb(handler);
