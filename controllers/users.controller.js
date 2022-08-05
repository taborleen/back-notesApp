const User = require("../models/user.model");

module.exports.UserController = {
    postUser: async (req, res) => {
        try {
          const { name, lastName } = req.body;
    
          const usic = await User.create({
            name,
            lastName
          });
    
          return res.json(usic);
        } catch (error) {
          return res.status(400).json({
            error: "Ошибка при добавлении услуги: " + error.toString(),
          });
        }
      },
    }