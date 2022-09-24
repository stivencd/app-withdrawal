const transactionService = require('../services/transaction.services')
const logProvider = require('../middlewares/logprovider');

const addTransaction = async (req, res) => {
    logProvider.info('Start addTransaction in withdrawal.controller.js')
    const { amount, accountId } = req.body
    return res.status(200).send(await transactionService.addTransaction(amount, accountId))
}

module.exports = { addTransaction }