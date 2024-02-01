const program = require("commander");
const check = require("../commands/check");

program
  .command("price")
  .description("Check price of coins")
  .option("--asset <type>", "Add specific coin types in CSV format", "BTC")
  .action((cmd) => check.price(cmd))
  .parse(process.argv);
