//credencias
const dotenv = require("dotenv");

dotenv.config({
    path: `./${process.env.NODE_ENV}.env`
});

const users = [{ username:process.env.API_USER, password:process.env.API_PASSWORD}]


function authenticate({ username, password}) {
    const user = users.find(u => u.username === username && u.password === password)
    if(user) {
        const {password, ...userWithoutPassword} = user
        return userWithoutPassword
    }
}

module.exports  = {authenticate}