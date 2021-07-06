const Repository = require("../repository/repository")
const Investment =require("../models/Investment")
const Recruitment=require("../models/InvestmentDetails")

const createInvestment=async(investmentName,description,dateCreateInvestment,dateEnd,RecruitmentTarget,ShareValue)=>{
    console.log("create in services!!");
    return new Promise(async (resolve, reject) => {
    try {
        const newInvestment = await Repository.createOne(Investment,{investmentName:investmentName,description:description,dateCreateInvestment:dateCreateInvestment,dateEnd:dateEnd})
        const newRecruitment = await Repository.createOne(Recruitment,{RecruitmentTarget:RecruitmentTarget,ShareValue:ShareValue,investmentId:newInvestment._id})     
        newInvestment.recruimentId=newRecruitment._id
        newInvestment.save()
        resolve(newRecruitment)
        console.log(newRecruitment);
    } catch (error) {
       reject(error.message)
    }
})
     // const newInvestment = new Investment({ investmentName: req.body.investmentName, description: req.body.description, dateCreateInvestment: req.body.dateCreateInvestment })
    // const newRecruitment = new Recruitment({ RecruitmentTarget: req.body.RecruitmentTarget, ShareValue: req.body.Recruitmented, investmentId: newInvestment._id })
    // newInvestment.recruimentId = newRecruitment._id
    // newInvestment.save().then((investment) => {
    //     newRecruitment.save().then((details) => {
    //         res.status(200).json({ investment: investment, details: details })
    //     }).catch(err => {
    //         res.status(400).send("not access to save recuitment")
    //     })
    // }).catch(err => {
    //     res.status(400).send("not access to save investment")
    // })
}

const addRecommendations = (recommendationUser, businessId, userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const business = await Repository.findOne(Business, { _id: businessId });
            const user = await Repository.findOne(User, { _id: userId });
            if (user && business) {
                const recommendation = await Repository.createOne(Recommendation, { Recommendation: recommendationUser, BusinessId: businessId, UserId: userId })
                business.userRecommendation.push(recommendation._id)
                business.save()
                resolve(recommendation);
            }
            else
                throw { message: 'user or business not defined' }
        } catch (error) {
            reject(error.message)
        }
    })
}

const getRecommendationByBusiness = (businessId, numResults) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (businessId && numResults !== undefined) {
                let data = await Business.findById(businessId, "userRecommendation businessName").populate({
                    path: 'userRecommendation',
                    skip: numResults ? numResults : 0, limit: 3,
                    populate: {
                        path: "UserId",
                        select: "userName"
                    }
                })
                resolve(data.userRecommendation)
        }
            else
throw { message: 'business or numResults not defined' }

        } catch (error) {
    reject(error.message)
}
    })
}


const deleteRecommendation = (recommendationId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (recommendationId) {
                let data = await Repository.findByIdAndRemove(Recommendation, recommendationId )
                resolve(data)
            }
            else
                throw { message: 'recommendationId not defined' }

        } catch (error) {
            reject(error.message)
        }
    })
}


module.exports = {
    createInvestment,  addRecommendations, getRecommendationByBusiness, deleteRecommendation
}