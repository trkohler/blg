import { Octokit } from "@octokit/rest"

// check file todo.md
// take all not deleted list items without a specific prefix in the beginning
// make new issues for them
// make prefix and change file
// commit 
// open PR
// get all deleted items 
// get their prefixes
// get all open issues 
// check if in those open issues there are some which deleted
// close those issues
// put comment from the bot

const octokit = new Octokit({
    auth: 'personaltoken'
});

await octokit.request('GET /repos/trkohler/{repo}/issues', {
    owner: 'OWNER',
    repo: 'REPO'
  })

