const express = require("express");
const cors = require("cors");
const legalDocuments = require("./documents");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

app.post("/search", (req, res) => {
  const { query } = req.body;
  const result = legalDocuments.find(doc=>
    doc.content.toLowerCase().includes(query.toLowerCase())
  );
  if (!result){
    return res.json({ answer: "No relevent document found."});
  }
  res.json({
     answer: result.content,
    title: result.title
   });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
