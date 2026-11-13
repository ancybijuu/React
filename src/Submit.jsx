import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [output, setOutput] = useState("");

  return (
    <div>
      <h2>Enter Your Name</h2>

      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => setOutput("Hello " + name)}>
        Submit
      </button>

      <h2>{output}</h2>
    </div>
  );
}

export default App;