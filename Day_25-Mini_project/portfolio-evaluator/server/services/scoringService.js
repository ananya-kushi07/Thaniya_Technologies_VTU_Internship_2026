export const calculateScores = (user, repos) => {
  // ---------------- ACTIVITY ----------------
  const repoCount = repos.length;
  const activityScore = Math.min(repoCount * 2, 25);

  // ---------------- CODE QUALITY ----------------
  let qualityPoints = 0;

  repos.forEach((repo) => {
    if (repo.description) qualityPoints += 1;
    if (repo.license) qualityPoints += 1;
    if (repo.topics && repo.topics.length > 0) qualityPoints += 1;
  });

  const codeQuality = Math.min(qualityPoints, 20);

  // ---------------- DIVERSITY ----------------
  const languages = new Set(repos.map((r) => r.language).filter(Boolean));
  const diversity = Math.min(languages.size * 2, 20);

  // ---------------- COMMUNITY ----------------
  const totalStars = repos.reduce((acc, r) => acc + r.stargazers_count, 0);
  const totalForks = repos.reduce((acc, r) => acc + r.forks_count, 0);

  const community = Math.min((totalStars + totalForks) / 10, 20);

  // ---------------- HIRING READINESS ----------------
  let hiringReady = 0;

  if (user.bio) hiringReady += 5;
  if (user.blog) hiringReady += 5;
  if (user.email) hiringReady += 5;
  if (user.public_repos > 5) hiringReady += 5;

  // ---------------- FINAL SCORE ----------------
  const overall =
    activityScore +
    codeQuality +
    diversity +
    community +
    hiringReady;

  return {
    activity: activityScore,
    codeQuality,
    diversity,
    community,
    hiringReady,
    overall,
  };
};