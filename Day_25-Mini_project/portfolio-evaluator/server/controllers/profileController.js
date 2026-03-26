import { getGitHubProfile } from "../services/githubService.js";
import { calculateScores } from "../services/scoringService.js";
import Report from "../models/Report.js";

export const fetchProfile = async (req, res) => {
  try {
    const { username } = req.params;

    // ✅ 1. Check cache
    const existing = await Report.findOne({ username });

    if (existing) {
      console.log("⚡ Returning cached data");
      return res.json({
        success: true,
        cached: true,
        ...existing._doc,
      });
    }

    // ✅ 2. Fetch from GitHub
    const data = await getGitHubProfile(username);

    const scores = calculateScores(data.user, data.repos);

    const profile = {
      username: data.user.login,
      avatar: data.user.avatar_url,
      bio: data.user.bio,
      followers: data.user.followers,
      publicRepos: data.user.public_repos,
    };

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

    const reportData = {
      username,
      profile,
      topRepos,
      languages,
      scores,
    };

    // ✅ 3. Save to DB
    const newReport = await Report.create(reportData);

    res.json({
      success: true,
      cached: false,
      ...newReport._doc,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};