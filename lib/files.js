// get the current directory (to get a default repo name)
// check whether a directory exists(if it is already a Git repository by looking)

const fs = require('fs');
const path  = require('path');

module.exports = {
  getCurrentDirBase: () => {
    // process.cwd() returns current working dir of the node process
    return path.basename(process.cwd());
  },
  dirExists: path => fs.existsSync(path)
}
