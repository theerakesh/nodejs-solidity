const path = require('path');
const fs = require('fs');
const solc = require('solc');



const helloPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(helloPath, 'UTF-8');

var input = {
  language: 'Solidity',
  sources: {
    'Inbox.sol': {
      content: source
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*']
      }
    }
  }
};
const compiled = solc.compile(JSON.stringify(input))
const parsed = JSON.parse(compiled)
// console.log(parsed.contracts["Inbox.sol"])
// fs.writeFileSync('compiled.json', JSON.stringify(parsed.contracts["Inbox.sol"].Inbox, null, 2), 'utf-8')
module.exports = parsed.contracts["Inbox.sol"].Inbox