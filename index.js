const axios = require("axios");
const { default: ow } = require("ow");
const packageDotJson = require("./package.json");

class Client {
  constructor(options) {
    if (options.token) {
      ow(options.token, ow.string);
    }
    this.token = options.token ? options.token : null;
    this.clientData = {
      token: this.token,
    };

    var default_http = {
      User_Agent: `dangerous-discord.js/v${packageDotJson.version}`,
      apiURL: "dangerousdiscord.com/api/",
    };
    this.http = options.http ? options.http : default_http;
    this.httpInstance = axios.create({
      baseURL: "https://" + this.http.apiURL,
      headers: { "User-Agent": this.http.User_Agent, origin: this.http.apiURL },
    });
  }

  async getUser(userID) {
    try {
      ow(userID, ow.string);

      let checkUser = await this.httpInstance.get(`/check?id=${userID}`);
      return checkUser.data;
    } catch (err) {
      return err;
    }
  }

  async report(userID, reason) {
    try {
      if (!this.token) throw new Error("No token provided for the Client");
      ow(userID, ow.string);
      ow(reason, ow.string);

      let reportUser = await this.httpInstance.post(`/report`, {
        id: userID,
        reason: reason,
        type: "other",
        key: this.token,
      });

      return reportUser.data;
    } catch (err) {
      return err;
    }
  }
}

module.exports = { Client };
