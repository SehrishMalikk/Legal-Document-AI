import React, { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = async () => {
    if (!query) return;

    try {
      const res = await fetch("http://localhost:3000/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();
      setResult(data.answer);
    } catch (error) {
      console.error("Error:", error);
      setResult("Something went wrong!");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>LegalSearch</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter legal query..."
        style={{ padding: "0.5rem", width: "300px" }}
      />
      <button onClick={handleSearch} style={{ marginLeft: "1rem", padding: "0.5rem" }}>
        Search
      </button>
      <div style={{ marginTop: "2rem" }}>
        <h3>Result:</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
