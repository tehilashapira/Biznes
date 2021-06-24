
const mongoose = require('mongoose')

const InvestmentSchema = mongoose.Schema({

investmentName://שם ההשקעה
{ 
    type:string
},
description://תאור
{
    type:string
},
createInvestment: //תאריך יצירת ההשקעה 
{
    type: Date,
    default: Date.now
},
deals:[{type:mongoose.Schema.Types.ObjectId,ref:'Deal'}]
   
})

module.exports = mongoose.model('Investment', InvestmentSchema)