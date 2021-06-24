const mongoose = require('mongoose')

const recruitmentSchema = mongoose.Schema({


    RecruitmentTarget: {//יעד הגיוס
        type: String
    },
    Recruitmented: {//גויס עד כה
        type: String
    },
    sumInvestors: {  //כמות משקיעים
        type:String
    },
    RecruitmentRoundTime: {//זמן סבב הגיוס
        type: String
    },

})

module.exports = mongoose.model('recruitment', recruitmentSchema)