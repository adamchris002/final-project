const {
  vaccine_register,
  certificate,
  vaccine_category,
} = require("../models");

class VaccineRegisterController {
  static async getData(req, res) {
    try {
      let result = await vaccine_register.findAll();
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
  static async create(req, res) {
    try {
      const { name, nik, age, ktp_image, place, jenis_vaksin } = req.body;
      let result = await vaccine_register.create({
        name,
        nik,
        age,
        ktp_image,
        place,
      });

      let result_certificate = await certificate.create({
        name,
        image,
        date,
        place,
      });

      let result_category = await vaccine_category.create({
        jenis_vaksin,
      });

      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
  static async update(req, res) {
    try {
      const id = Number(req.params.id);
      const { name, nik, age, ktp_image, place } = req.body;

      let result = await vaccine_register.update(
        {
          name,
          nik,
          age,
          ktp_image,
          place,
        },
        {
          where: { id },
        }
      );

      result[0] === 1
        ? res.json({
            message: `Data with id of ${id} has been updated`,
          })
        : res.json({
            message: `Data with id of ${id} has not been updated`,
          });
    } catch (err) {
      res.json(err);
    }
  }
  static async delete(req, res) {
    try {
      const id = Number(req.params.id);

      let result = await vaccine_register.destroy({
        where: { id },
      });

      result === 1
        ? res.json({
            message: `Data with id of ${id} has been deleted`,
          })
        : res.json({
            message: `Data with id of ${id} has not been deleted`,
          });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = VaccineRegisterController;
