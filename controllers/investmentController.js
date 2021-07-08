const service = require("../services/investmentService")
const Investment = require('../models/Investment')
const Recruitment = require('../models/InvestmentDetails')
const User = require('../models/User')

const createInvestment = async(req, res) => {
    console.log("create in controller!!");
    try {
        const{investmentName,description,dateCreateInvestment,dateEnd,RecruitmentTarget,ShareValue,img}=req.body
        console.log(req.body);
        const newInvestment=await service.createInvestment(investmentName,description,dateCreateInvestment,dateEnd,RecruitmentTarget,ShareValue,img)
        // await service.createInvestment(investmentName,description,dateCreateInvestment,dateEnd,RecruitmentTarget,ShareValue)
        console.log(newInvestment);
        res.status(200).json({
            message: "created Investment successfully", 
            investment: newInvestment.newInvestment,recruiment:newInvestment.newRecruitment
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}
const getAllInvestments = async (req, res) => {
    console.log("get all investments in controller")
    try {
        const data = await service.getAllInvestments()
        res.status(200).json(data)
    }
    catch (err) {
        res.status(400).send(err)
    }
}
const deleteInvestmentByAdmin =async (req, res) => {
        console.log('delete in controller!!');
            try {
                await service.deleteInvestmentByAdmin(req.params.id)
                // await Recruitment.findOneAndDelete({ investmentId: req.params.id })
                // await Investment.findByIdAndDelete(req.params.id)
                const investments=await service.getAllInvestments()
                const recruitments=await service.getAllInvestments()
                console.log("afterrrrrrrr",investments,recruitments);
                // const investments=await Investment.find()
                // const recruitments=await Recruitment.find()
                // console.log("kkkk",investments,recruitments);
               

                res.status(200).json({message:"success to remove investment",investments,recruitments})
            } catch (error) {
                res.status(400).json({ messege: "not success to remove recruiment or investment",error:error })
            } 
}
    
// const createInvestment = (req, res) => {//with no service
    // console.log("create controller!!");
    // investmentName:
    // description:
    // dateCreateInvestment:
    // dateEnd:   
    // const{investmentName,description,dateCreateInvestment,dateEnd,RecruitmentTarget,ShareValue}=req.body
    // console.log(req.body);
    // const newInvestment = new Investment({ investmentName:investmentName, description:description, dateCreateInvestment:dateCreateInvestment,dateEnd:dateEnd})
    // const newRecruitment = new Recruitment({ RecruitmentTarget:RecruitmentTarget, ShareValue:ShareValue, investmentId: newInvestment._id })
    // newInvestment.recruimentId = newRecruitment._id
    // newInvestment.save().then((investment) => {
    //     console.log(investment);
    //     newRecruitment.save().then((details) => {
    //         console.log(details);
    //         res.status(200).json({ investment: investment, details: details })
    //     }).catch(err => {
    //         res.status(400).send("not access to save recuitment")
    //     })
    // }).catch(err => {
    //     res.status(400).send("not access to save investment")
    // })
// }
// const deleteInvestmentByAdmin =async (req, res) => {//with no service
//     console.log('delete!!');
    // User.findOne({userName:req.params.userName}).then(
        // try {
        //     await Recruitment.findOneAndDelete({ investmentId: req.params.id })
        //     await Investment.findByIdAndDelete(req.params.id)
        //     const investments=await Investment.find()
        //     const recruitments=await Recruitment.find()
        //     console.log("kkkk",investments,recruitments);
        //     res.status(200).json({message:"success to remove investment",investments:investments,recruitments:recruitments})
        // } catch (error) {
        //     res.status(400).json({ messege: "not success to remove recruiment or investment",error:error })
        // }

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

// }

// const deleteAll=async(req,res)=>{delete all items from collection
//  await Investment.remove()
//  await Recruitment.remove()
// }

module.exports = { createInvestment, deleteInvestmentByAdmin ,getAllInvestments}