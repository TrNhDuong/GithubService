const GithubService = require('./githubService')

async function cli(){
    const userInput = process.argv.splice(2);
    if (userInput.length != 2){
        console.log('Number of argument not valid');
        return;
    }
    const typeRequest = userInput[0];
    const githubName = userInput[1];
    if (typeRequest == 'list-activities'){
        GithubService.listActivities(githubName);
    } else if (typeRequest == 'list-repos'){
        GithubService.listRepos(githubName);
    } else if (typeRequest == 'get-user'){
        GithubService.getUser(githubName);
    } else {
        console.log('Type request not valid');
    }
}


module.exports = cli;