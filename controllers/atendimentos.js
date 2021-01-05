const Atendimento = require('../models/atendimentos')

module.exports = (app) => {
  app.get('/atendimentos', (req, res) => {
    res.send('Rota de atendimentose é isso ai')
  })

  app.post('/atendimentos', (req, res) => {
    Atendimento.adicionarAtendimento(req.body, res)
  })
}
