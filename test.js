require("dotenv").config();
const { Client } = require("./index");

const client = new Client({
  token: process.env.TOKEN,
});

(async () => {
  let checkUser = await client.check("681621708301533194");
  console.log(checkUser);
  /*let reportUser = await client.report("681621708301533194", "Testing");
  console.log(reportUser);*/
})();
