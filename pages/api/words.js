import Words from "../../models/Words";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  let words = await Words.find();
  res.status(200).json({ words });
};

export default connectDb(handler);
