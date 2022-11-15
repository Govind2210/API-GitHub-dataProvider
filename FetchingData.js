require("dotenv").config();
const GitURL = process.env.GitURL;


const Fetch = async (username)=>{
    const data = await fetch(GitURL+username);
    return await data.json();
}

module.exports = Fetch;