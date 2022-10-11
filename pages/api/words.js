import { words } from "./../../data/words";

export default function handler(req, res) {
  if (req.method === "POST") {
    const word = req.body;
    words.push(word);
    res.status(201).json(words);
  } else if (req.method === "GET") {
    res.status(200).json(words);
  }
}
