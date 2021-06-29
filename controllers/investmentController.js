const Investment=require('../models/Investment')
const Recruitment=require('../models/InvestmentDeatails')

const createInvestment=(req,res)=>{
    const newInvestment=new Investment({investmentName:req.body.investmentName,description:req.body.description,createInvestment:req.body.createInvestment})
    const newRecruitment=new Recruitment({RecruitmentTarget:req.body.RecruitmentTarget,Recruitmented:req.body.Recruitmented,sumInvestors:req.body.sumInvestors,RecruitmentRoundTime:req.body.RecruitmentRoundTime})
    newInvestment.save().then(()=>{
        newRecruitment.save().then(()=>{
            res.status(200).json()
        }).catch(err=>{

        })
    }).catch(err=>{

    })
}

module.exports = {createInvestment}