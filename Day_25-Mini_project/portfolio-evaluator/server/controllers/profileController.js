import { getGitHubProfile } from "../services/githubService.js";
import { calculateScores } from "../services/scoringService.js";

export const fetchProfile = async (req, res) => {
  try {
    const { username } = req.params;

    const data = await getGitHubProfile(username);

    const scores = calculateScores(data.user, data.repos);

    // ✅ Clean profile
    const profile = {
      username: data.user.login,
      avatar: data.user.avatar_url,
      bio: data.user.bio,
      followers: data.user.followers,
      publicRepos: data.user.public_repos,
    };

    // ✅ Top repos (sorted by stars)
    const topRepos = data.repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6)
      .map((repo) => ({
        name: repo.name,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
        url: repo.html_url,
      }));

    // ✅ Language distribution
    const languageCount = {};

    data.repos.forEach((repo) => {
      if (repo.language) {
        languageCount[repo.language] =
          (languageCount[repo.language] || 0) + 1;
      }
    });

    const total = Object.values(languageCount).reduce((a, b) => a + b, 0);

    const languages = Object.keys(languageCount).map((lang) => ({
      name: lang,
      percent: ((languageCount[lang] / total) * 100).toFixed(1),
    }));

    res.json({
      success: true,
      profile,
      topRepos,
      languages,
      scores,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};