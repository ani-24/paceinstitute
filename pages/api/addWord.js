import Words from "../../models/Words";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === "POST") {
    let word = new Words(req.body);
    await word.save();
    res.status(201).json({ success: "Success" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
