
const mongoose = require('mongoose')
const InvestmentSchema = mongoose.Schema({

    investmentName://name of hashkaa
    {
        type: String
    },
    description://desc
    {
        type: String
    },
    dateCreateInvestment: //created date of hashkaa
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
        type: String
    },
    deals://all deals for hashkaa
     [{ type: mongoose.Schema.Types.ObjectId, ref: 'Deal' }],

     userId:{//person created hashka
         type: mongoose.Schema.Types.ObjectId, ref: 'User'
     },
    recruimentId://id of details hashkaa
    { type: mongoose.Schema.Types.ObjectId, ref: 'Recruitment' }

})

module.exports = mongoose.model('Investment', InvestmentSchema)