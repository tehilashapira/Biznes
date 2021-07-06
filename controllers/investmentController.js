const service = require("../services/investmentService")
const Investment = require('../models/Investment')
const Recruitment = require('../models/InvestmentDetails')
const User = require('../models/User')

const createInvestment = async(req, res) => {
    console.log("create in controller!!");
    try {
        const{investmentName,description,dateCreateInvestment,dateEnd,RecruitmentTarget,ShareValue}=req.body
        const newInvestment=await service.createInvestment(investmentName,description,dateCreateInvestment,dateEnd,RecruitmentTarget,ShareValue)
        // await service.createInvestment(investmentName,description,dateCreateInvestment,dateEnd,RecruitmentTarget,ShareValue)
        console.log(newInvestment);
        res.status(200).json({
            message: "created Investment successfully", investment: newInvestment
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}
// const createInvestment = (req, res) => {with no service
//     console.log("create controller!!");
//     const newInvestment = new Investment({ investmentName: req.body.investmentName, description: req.body.description, dateCreateInvestment: req.body.dateCreateInvestment })
//     const newRecruitment = new Recruitment({ RecruitmentTarget: req.body.RecruitmentTarget, ShareValue: req.body.Recruitmented, investmentId: newInvestment._id })
//     newInvestment.recruimentId = newRecruitment._id
//     newInvestment.save().then((investment) => {
//         newRecruitment.save().then((details) => {
//             res.status(200).json({ investment: investment, details: details })
//         }).catch(err => {
//             res.status(400).send("not access to save recuitment")
//         })
//     }).catch(err => {
//         res.status(400).send("not access to save investment")
//     })
// }
const deleteInvestmentByAdmin =async (req, res) => {
    console.log('delete!!');
    // User.findOne({userName:req.params.userName}).then(
        try {
            await Recruitment.findOneAndDelete({ investmentId: req.params.id })
            await Investment.findByIdAndDelete(req.params.id)
            res.status(200).json({message:"success to remove investment"})
        } catch (error) {
            res.status(400).json({ messege: "not success to remove recruiment or investment",error:error })
        }

    // Recruitment.findOneAndDelete({ investmentId: req.params.id })
    //     .then((result) => {
    //         console.log("succes", result);

    //         Investment.findByIdAndDelete(req.params.id)
    //             .then((result) => {
    //                 console.log("result", result);
    //                 res.status(200).json({ messege: "success to remove investment" })
    //             })
    //             .catch((err) => {
    //                 console.log("err", err.message);
    //                 res.status(400).json({ messege: "not success to remove recruiment" })
    //             })
    //     }
    //     )
    //     .catch(err => {
    //         console.log(err.message)
    //         res.status(400).send("not success to remove investment")
    //     })
    // ).catch(res.status(400).send("user not found"))

}
// const deleteAll=async(req,res)=>{delete all items from collection
//  await Investment.remove()
//  await Recruitment.remove()
// }
const getAllInvestments = (req, res) => {

}
module.exports = { createInvestment, deleteInvestmentByAdmin }