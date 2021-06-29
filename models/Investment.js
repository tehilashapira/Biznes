
const mongoose = require('mongoose')
const InvestmentSchema = mongoose.Schema({

    investmentName://name of hashkaa
    {
        type: string
    },
    description://desc
    {
        type: string
    },
    createInvestment: //created date of hashkaa
    {
        type: Date,
        default: Date.now
    },

    dateEnd://date end of hashkaa

    {
        type: Date
    },
    owner://person created hashkaa??idUser
    {
        type: string
    },
    deals://all deals for hashkaa
     [{ type: mongoose.Schema.Types.ObjectId, ref: 'Deal' }]

})

module.exports = mongoose.model('Investment', InvestmentSchema)