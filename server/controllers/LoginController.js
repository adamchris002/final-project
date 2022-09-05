const { user } = require("../models");

class LoginController {
  static async verifyAccount(req, res) {
    try {
      let result = await user.findAll();
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = LoginController;
