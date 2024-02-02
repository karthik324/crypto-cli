const config = require("./config");
const pkg = require("../package.json");
const colors = require("colors");

class KeyManager {
  constructor() {
    this.conf = config;
  }

  setKey(key) {
    this.conf.set("apiKey", key);
    return key;
  }

  getKey() {
    const key = this.conf.get("apiKey");
    if (!key) {
      throw console.log(
        "No API Key found --Get a key from https://rapidapi.com".red
      );
      // throw new Error('No API Key found -- Get a key at https://rapidapi.com');
    }
    return key;
  }

  deleteKey() {
    const key = this.conf.get("apiKey");
    if (!key) {
      throw console.log(
        "No API Key found --Get a key at https://rapidapi.com".red
      );
    }
    this.conf.delete("apiKey");
    return;
  }
}

module.exports = KeyManager;
