const axios = require("axios");
const colors = require("colors");

class CryptoApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://crypto-and-forex-rates.p.rapidapi.com";
  }

  async getCoinData(coinOption) {
    try {
      const optionsCoin = {
        method: "GET",
        url: `https://crypto-and-forex-rates.p.rapidapi.com/api/assetInfo/${coinOption}`,
        headers: {
          "X-RapidAPI-Key": this.apiKey,
          "X-RapidAPI-Host": "crypto-and-forex-rates.p.rapidapi.com",
        },
      };
    //   console.log("req: ", optionsCoin);
      const resCoin = await axios.request(optionsCoin);
      //   console.log("message", resCoin.data.message);
      if (resCoin.data.success == 200) {
        // console.log(`Res Price`, resCoin.data["0"].price);
        let asset = resCoin.data["0"].symbol;
        let price = resCoin.data["0"].price;
        let chartSymbol = resCoin.data["0"].ChartSymbol;

        let output = `Asset: ${asset.green} | Chart symbol: ${chartSymbol} | Price: ${price.yellow}`;
        return output;
      } else if (resCoin.data.success == 404) {
        return `Asset not found`.red;
      }
    } catch (error) {
      console.log(
        error.response.data.message.red,
        `Get an API key from https://rapidapi.com`.green
      );
    }
  }
}

module.exports = CryptoApi;
