import { useState } from "react";
import { getProfile } from "../services/api";
import SearchBar from "../components/SearchBar";
import ProfileCard from "../components/ProfileCard";
import RepoList from "../components/RepoList";
import LanguageChart from "../components/LanguageChart";

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    setLoading(true);
    setError("");
    setData(null);

    try {
      const res = await getProfile(username);
      setData(res.data);
    } catch (err) {
      setError("User not found or API error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>🚀 Developer Portfolio Evaluator</h1>

      <SearchBar onSearch={handleSearch} loading={loading} />

      {/* LOADING */}
      {loading && <div className="loader">⏳ Fetching data...</div>}

      {/* ERROR */}
      {error && <h3 style={{ color: "red" }}>{error}</h3>}

      {/* DATA */}
      {data && (
        <>
          <div className="card">
            <ProfileCard profile={data.profile} scores={data.scores} />
          </div>

          <div className="card">
            <RepoList repos={data.topRepos} />
          </div>

          <div className="card">
            <LanguageChart languages={data.languages} />
          </div>
        </>
      )}
    </div>
  );
}

export default Home;