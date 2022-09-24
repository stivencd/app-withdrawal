const transactionRepository = require('../repositories/transaction.repository')
const messagesAsync = require('../middlewares/messageasync');
const logProvider = require('../middlewares/logprovider');


const transactionService = {
    addTransaction: async (amount, accountId) => {
        logProvider.info('Start addTransaction in withdrawal.services.js')
        const message = await transactionRepository.addTransaction(amount, accountId)
        console.log(message);
        messagesAsync.send(message.id, accountId, amount, 'withdrawal')
        return message;
    }
}

module.exports = transactionService