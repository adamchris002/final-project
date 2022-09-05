const { vaccine_category } = require("../models");

class VaccineCategoryController {
  static async getVaccine(req, res) {
    try {
      let result = await vaccine_category.findAll();
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
  static async update(req, res) {
    try {
      const id = Number(req.params.id);
      const { name } = req.body;

      let result = await vaccine_category.update(
        {
          name,
        },
        {
          where: { id },
        }
      );

      result[0] === 1
        ? res.json({
            message: `Data of Vaccine with the id of ${id} has been updated!`,
          })
        : res.json({
            message: `Data of Vaccine with the id of ${id} has not been updated!`,
          });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = VaccineCategoryController;
