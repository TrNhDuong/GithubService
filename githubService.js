const { Octokit } = require("@octokit/rest");

const octokit = new Octokit();

class GithubService {
    static async getUser(username) {
        try {
            const result = await octokit.users.getByUsername({ username });
            console.log(result.data);
        } catch (err){
            console.log(err.message)
        }
    }

    static async listRepos(username) {
        const response = await octokit.repos.listForUser({
            username,
            per_page: 10
        });

        console.log("📦 Repos:");
        response.data.forEach(repo => {
            console.log(`- ${repo.name} (⭐ ${repo.stargazers_count})`);
        });
    }

    static async listActivities(username){
        const repsponse = await octokit.activity.listPublicEventsForUser({username,
            per_page: 5
        });
        console.log('🕹️ Public Activities:');
        repsponse.data.forEach(activity => {
            console.log(`- ${activity.type} at ${activity.created_at} on ${activity.repo.name}`)
        })
    }
}

module.exports = GithubService;

