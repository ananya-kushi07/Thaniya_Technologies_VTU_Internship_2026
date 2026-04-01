import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProfile } from "../services/api";
import ProfileCard from "../components/ProfileCard";
import RepoList from "../components/RepoList";
import LanguageChart from "../components/LanguageChart";

function Report() {
  const { username } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProfile(username);
        setData(res.data);
      } catch {
        alert("Error loading report");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (loading) return <h2>⏳ Loading Report...</h2>;

  return (
    <div className="container">
      <h1>📊 Report for {username}</h1>

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

export default Report;