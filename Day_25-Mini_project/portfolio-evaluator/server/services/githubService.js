import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN, // optional but recommended
});

export const getGitHubProfile = async (username) => {
  try {
    // 1. Get user profile
    const { data: user } = await octokit.users.getByUsername({
      username,
    });

    // 2. Get repositories
    const { data: repos } = await octokit.repos.listForUser({
      username,
      per_page: 100,
    });

    return {
      user,
      repos,
    };
  } catch (error) {
    throw new Error("GitHub user not found");
  }
};