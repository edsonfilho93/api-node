const conexao = require('../infra/conexao')
const moment = require('moment')

class Atendimentos {
  adicionarAtendimento(atendimento, res) {
    const sql = 'INSERT INTO atendimentos SET ?'
    const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')

    const data = moment(atendimento.data, 'DD/MM/YYYY').format(
      'YYYY-MM-DD HH:mm:ss'
    )
    const atendimentoComData = { ...atendimento, dataCriacao, data }

    conexao.query(sql, atendimentoComData, (err, result) => {
      if (err) {
        res.status(400).json(err)
      } else {
        res.status(201).json(result.insertId)
      }
    })
  }
}

module.exports = new Atendimentos()
