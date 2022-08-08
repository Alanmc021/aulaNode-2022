const User = require('../Models/User')

class UserController {
  index(req, res) {
    console.log(req.body);
  }

  show(req, res) {
    var users = ["Kaio", "Larissa", "Danver"]
    return res.status(200).json({
      error: false,
      users
    })
  }

  async store(req, res) {
    const { name, email, password } = req.body
    const data = { name, email, password }

    await User.create(data, (err) => {
      if (err) return res.status(400).json({
        error: true,
        message: "Error ao tentar inserir usuario no mongoDb"
      })

      return res.status(200).json({
        error: false,
        message: "Usuario cadastrado com sucesso"
      })
    })
  }
}

module.exports = new UserController();