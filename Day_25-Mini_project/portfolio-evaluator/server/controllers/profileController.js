import { getGitHubProfile } from "../services/githubService.js";
import { calculateScores } from "../services/scoringService.js";

export const fetchProfile = async (req, res) => {
  try {
    const { username } = req.params;

    const data = await getGitHubProfile(username);

    const scores = calculateScores(data.user, data.repos);

    // 🔥 Clean profile data
    const cleanProfile = {
      username: data.user.login,
      avatar: data.user.avatar_url,
      bio: data.user.bio,
      followers: data.user.followers,
      publicRepos: data.user.public_repos,
    };

    // 🔥 Clean repo data (top 6 only)
    const cleanRepos = data.repos.slice(0, 6).map((repo) => ({
      name: repo.name,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language,
      url: repo.html_url,
    }));

    res.json({
      success: true,
      profile: cleanProfile,
      repos: cleanRepos,
      scores,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};