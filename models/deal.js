const mongoose = require('mongoose')

const DealSchema = mongoose.Schema({


    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    investment://שם ההשקעה
    {
        type: mongoose.Schema.Types.ObjectId, ref: 'Investment'
    },
    description://תאור
    {
        type: string
    },
    createInvestment: //תאריך יצירת ההשקעה 
    {
        type: Date,
        default: Date.now
    }


})

module.exports = mongoose.model('Deal', DealSchema)