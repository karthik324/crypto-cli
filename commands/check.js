const KeyManager = require("../lib/KeyManager");
const CryptoApi = require("../lib/CryptoApi");

const check = {
  async price(cmd) {
    try {
      let keyManager = new KeyManager();
      const key = keyManager.getKey();
      const api = new CryptoApi(key);
      const priceOutputData = await api.getCoinData(cmd.asset);
      console.log(priceOutputData);
    } catch (error) {
      // console.error(error);
    }
  },
};

module.exports = check;
