const User = require('../Models/User')
const yup = require('yup')
const bcrypt = require('bcryptjs')

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
    let schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: true,
        message: "Dados Inválidos "
      })
    }

    let userExist = await User.findOne({ email: req.body.email })
    if (userExist) {
      return res.status(400).json({
        error: true,
        message: "Este usuário ja existe"
      })
    }

    const { name, email, password } = req.body
    const data = { name, email, password }

    data.password = await bcrypt.hash( data.password , 8)

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