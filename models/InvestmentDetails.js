const mongoose = require('mongoose')

const recruitmentSchema = mongoose.Schema({


    RecruitmentTarget: {//Recruitment target(sum)
        type: String
    },
    // Recruitmented: {//גויס עד כה,לחשב node
    //     type: String
    // },
    // sumInvestors: {  //לחשב במונגו,כמות משקיעים
    //     type:String
    // },
    // RecruitmentRoundTime: {//time of get money from people
    //     type: String
    // },
    ShareValue:{//שווי מניה
        type:String
    },
    investmentId://id of hashkaa
    { type: mongoose.Schema.Types.ObjectId, ref: 'Investment' }
})

module.exports = mongoose.model('recruitment', recruitmentSchema)