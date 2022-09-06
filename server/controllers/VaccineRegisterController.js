const {
  register,
  certificate,
  category,
} = require("../models");

class VaccineRegisterController {
  static async getData(req, res) {
    try {
      let result = await register.findAll();
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
  static async create(req, res) {
    try {
      const { name, nik, age, ktp_image, place, jenis_vaksin } = req.body;
      const image = "https://i0.wp.com/infobanknews.com/wp-content/uploads/2021/03/Sertifikat-vaksin.jpg?fit=640%2C369&ssl=1&resize=1280%2C720";
      let result = await register.create({
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

      let result_category = await category.create({
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

      let result = await register.update(
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

      let result = await register.destroy({
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
