const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/search", (req, res) => {
  const { query } = req.body;
  // Simulated AI response
  const answer = `AI response for: "${query}"`;
  res.json({ answer });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
