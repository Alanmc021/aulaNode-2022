const User = require("../Models/User")
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const config = require("../../config/auth")

class LoginController {
    async index(req, res) {
        const { email, password } = req.body

        const userExiste = await User.findOne({ email })
        //parte 1 : Verificar se o usuario existe 
        if (!userExiste) {
            return res.status(400).json({
                erro: true,
                message: "Usuário não existe"
            })
        }
        //parte 2 : Verificar se a senha esta correta 
        if (!(await bcrypt.compare(password, userExiste.password))) {
            return res.status(400).json({
                erro: true,
                message: "A senha esta inválida"
            })
        }

        //parte 3 : Esta tudo certo ? Retorna a senha e email 
        return res.status(200).json({
            user: {
                name: userExiste.name,
                email: userExiste.email,
            },
            token: jwt.sign({ id: userExiste._id }, config.secret , { expiresIn: config.expireIn })
        })
    }
}

module.exports = new LoginController()