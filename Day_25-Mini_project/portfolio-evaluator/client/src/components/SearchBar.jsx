import { useState } from "react";

function SearchBar({ onSearch }) {
  const [username, setUsername] = useState("");

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => onSearch(username)}>Evaluate</button>
    </div>
  );
}

export default SearchBar;