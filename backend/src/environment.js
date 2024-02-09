const path = require("path");

const ENV = process.env.NODE_ENV || "development";
const PATH = path.resolve(__dirname, ".env." + ENV);

require("dotenv").config({ path: PATH });

module.exports = ENV;

// Path: photolabs-starter/backend/src/index.js

//Had to ask for AI Clairification 
/* 
The path.resolve(__dirname, "../.env." + ENV); line in your environment.js file is responsible for constructing the path to your .env.development file.

Here's how it works:

__dirname is a Node.js global variable that gives the directory of the current module. In this case, it's the directory where your environment.js file is located.
"../.env." + ENV is a relative path from __dirname. The .. part means "go up one directory". So, this path points to a file in the parent directory of environment.js. The file is named .env. followed by the value of ENV, which is "development" by default.
path.resolve() takes these paths and combines them into an absolute path.
So, if your environment.js file is in the root/backend directory and your .env.development file is also in the root/backend directory, you should change "../.env." + ENV to ".env." + ENV (remove the .. part). This will point to the .env.development file in the same directory as environment.js.


const path = require("path");

const ENV = process.env.NODE_ENV || "development";
const PATH = path.resolve(__dirname, "../.env." + ENV);

require("dotenv").config({ path: PATH });

module.exports = ENV;

*/