const customExpress = require('./config/customExpress')
const tabelas = require('./infra/tabelas')
const conexao = require('./infra/conexao')

const app = customExpress()

conexao.connect((erro) => {
  if (erro) {
    console.log(erro)
  } else {
    console.log('Banco conectado com sucesso!')

    tabelas.init(conexao)

    app.listen(3000, () => {
      console.log('Servidor rodando!')
    })
  }
})
