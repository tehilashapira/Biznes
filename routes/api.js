const router=require('express').Router();
const investmentController=require('../controllers/investmentController')

router.post('/createInvestment',investmentController.createInvestment)
router.delete('/deleteInvestmentByAdmin/:id',investmentController.deleteInvestmentByAdmin)
router.get("/getAllInvestments",investmentController.getAllInvestments)
// router.delete('/deleteAll',investmentController.deleteAll)

module.exports=router