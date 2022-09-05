const { certificate } = require("../models");

class VaccineCertificateController {
  static async getVaccineData(req, res) {
    try {
      let result = await certificate.findAll();
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static async updateVaccineData(req, res) {
    try {
      const id = Number(req.params.id);
      const { name, image, date, place } = req.body;

      let result = await certificate.update(
        {
          name,
          image,
          date,
          place,
        },
        {
          where: { id },
        }
      );

      result[0] === 1
        ? res.json({
            message: `Certificate with id of ${id} has been updated`,
          })
        : res.json({
            messag: `Certificate with id of ${id} has not been updated`,
          });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = VaccineCertificateController;
