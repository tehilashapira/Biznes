const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({

    userName:{
     
        type:String

    },
    email: { type: String, require: true, unique: true, match: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ },
   

    deals : [{ type: mongoose.Schema.Types.ObjectId, ref: 'deal' }],
})

module.exports = mongoose.model('User', userSchema)