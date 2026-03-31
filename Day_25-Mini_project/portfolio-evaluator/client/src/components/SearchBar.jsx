import { useState } from "react";

function SearchBar({ onSearch, loading }) {
  const [username, setUsername] = useState("");

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        disabled={loading}
      />

      <button
        onClick={() => onSearch(username)}
        disabled={loading}
      >
        {loading ? "Loading..." : "Evaluate"}
      </button>
    </div>
  );
}

export default SearchBar;