const KeyManager = require("../lib/KeyManager");
const inquirer = require("inquirer");
const colors = require("colors");
const { isRequired } = require("../utils/validation");

const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter API Key ".green + "https://rapidapi.com",
        validate: isRequired,
      },
    ]);
    const key = keyManager.setKey(input.key);
    if (key) {
      console.log("API key set".blue);
    }
  },
  show() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();
      console.log("Curr API key is ", key.yellow);
      return key;
    } catch (e) {
      // console.log("Error", e);
    }
  },
  remove() {
    try {
      const keyManager = new KeyManager();
      keyManager.deleteKey();
      console.log("Key Removed".bgMagenta);
      return key;
    } catch (e) {
      // console.log("Error", e);
    }
  },
};

module.exports = key;
