import Words from "../../models/Words";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === "POST") {
    console.log(req.body._id);
    let word = await Words.findByIdAndUpdate(req.body._id, req.body);
    res.status(200).json({ success: "success" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
