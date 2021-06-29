const mongoose = require('mongoose')

const DealSchema = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    investmentId://id of hashkaa
    {
        type: mongoose.Schema.Types.ObjectId, ref: 'Investment'
    },
   
    createDeal: //date closed deal
    {
        type: Date,
        default: Date.now
    },

    sum:{ //schum of deal
    type:String
    }


})

module.exports = mongoose.model('Deal', DealSchema)