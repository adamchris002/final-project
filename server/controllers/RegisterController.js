const { user } = require("../models");

class RegisterController {
  static async checkAccount(req, res) {
    try {
      let result = await user.findAll();
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
  static async createAccount(req, res) {
    try {
      const { name, username, password } = req.body;

      let result = await user.create({
        name,
        username,
        password,
      });

      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = RegisterController;
