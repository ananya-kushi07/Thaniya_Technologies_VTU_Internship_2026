import { useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);

  const fetchProfile = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/profile/${username}`
      );
      setData(res.data);
    } catch (err) {
      alert("User not found");
    }
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>Developer Portfolio Evaluator 🚀</h1>

      <input
        type="text"
        placeholder="Enter GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: "10px", width: "250px" }}
      />

      <br /><br />

      <button onClick={fetchProfile} style={{ padding: "10px 20px" }}>
        Evaluate
      </button>

      {/* RESULT */}
      {data && (
        <div style={{ marginTop: "30px" }}>
          <h2>{data.profile.username}</h2>
          <img src={data.profile.avatar} width="100" />
          <p>Followers: {data.profile.followers}</p>

          <h3>Overall Score: {data.scores.overall}</h3>

          <h3>Top Repositories:</h3>
          {data.topRepos.map((repo, i) => (
            <div key={i}>
              <a href={repo.url} target="_blank">
                {repo.name}
              </a>
              ⭐ {repo.stars}
            </div>
          ))}

          <h3>Languages:</h3>
          {data.languages.map((lang, i) => (
            <div key={i}>
              {lang.name} - {lang.percent}%
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;