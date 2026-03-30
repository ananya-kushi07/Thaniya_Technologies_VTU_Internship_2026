function RepoList({ repos }) {
  return (
    <div>
      <h3>⭐ Top Repositories</h3>

      {repos.map((repo, i) => (
        <div key={i} style={{ margin: "10px 0" }}>
          <a href={repo.url} target="_blank">
            {repo.name}
          </a>
          <span> ⭐ {repo.stars}</span>
        </div>
      ))}
    </div>
  );
}

export default RepoList;