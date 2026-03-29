function RepoList({ repos }) {
  return (
    <div>
      <h3>Top Repositories</h3>
      {repos.map((repo, i) => (
        <div key={i}>
          <a href={repo.url} target="_blank">
            {repo.name}
          </a>
          ⭐ {repo.stars}
        </div>
      ))}
    </div>
  );
}

export default RepoList;