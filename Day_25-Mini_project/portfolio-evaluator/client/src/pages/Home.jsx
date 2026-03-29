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
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Developer Portfolio Evaluator 🚀</h1>

      <SearchBar onSearch={handleSearch} />

      {data && (
        <>
          <ProfileCard profile={data.profile} scores={data.scores} />
          <RepoList repos={data.topRepos} />
          <LanguageChart languages={data.languages} />
        </>
      )}
    </div>
  );
}

export default Home;