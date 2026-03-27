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
        username: existing.username,
        profile: existing.profile,
        topRepos: existing.topRepos,
        languages: existing.languages,
        scores: existing.scores,
        shareUrl: existing.shareUrl,
      });
    }

    // ✅ 2. Fetch from GitHub
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
        shareUrl: repo.html_url,
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

    // ✅ Final report data
    const reportData = {
      username,
      profile,
      topRepos,
      languages,
      scores,
      shareUrl: `/report/${username}`, // 🔥 Shareable URL
    };

    // ✅ Save to MongoDB
    const newReport = await Report.create(reportData);

    // ✅ Send clean response
    res.json({
      success: true,
      cached: false,
      username: newReport.username,
      profile: newReport.profile,
      topRepos: newReport.topRepos,
      languages: newReport.languages,
      scores: newReport.scores,
      shareUrl: newReport.shareUrl,
    });

  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};