import { useState } from "react";
import { getProfile } from "../services/api";
import SearchBar from "../components/SearchBar";
import ProfileCard from "../components/ProfileCard";
import RepoList from "../components/RepoList";
import LanguageChart from "../components/LanguageChart";

function Home() {
  const [data, setData] = useState(null);

  const handleSearch = async (username) => {
    try {
      const res = await getProfile(username);
      setData(res.data);
    } catch {
      alert("User not found");
    }
  };

  return (
    <div className="container">
      <h1>🚀 Developer Portfolio Evaluator</h1>

      <SearchBar onSearch={handleSearch} />

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