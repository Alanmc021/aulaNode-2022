const mongoose = require('mongoose')

class Connection {
    constructor() {
        this.dataBaseConnetionMomgoDb()
    }

    dataBaseConnetionMomgoDb() {
        this.mongoDbConnection = mongoose.connect("mongodb://localhost/nodejs", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true
        })
            .then(() => {
                console.log('Conexao estabelecida com o mongo DB');
            })
            .catch((error) => {
                console.log(`Erro ao estabeler conexao com o mongo DB: ${error}`);
            })
    }

}

module.exports = new Connection();