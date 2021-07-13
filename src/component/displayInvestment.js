import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import dimg from '../asset/pipl.png'
import { ProgressBar } from 'react-bootstrap'

export default function DisplayInvestment() {

    const investment = useSelector(state => state.reducerInvestment.investment)
    const recruitment = useSelector(state => state.reducerInvestment.recruitment)
    const dispatch = useDispatch()

    const { investmentId } = useParams()
    const currentInvestment = investment[investment.indexOf(investment.find(i => i["_id"] == investmentId))]
    const currentRecruitment = recruitment[recruitment.indexOf(recruitment.find(i => i["investmentId"] == investmentId))]

    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds


    return (
        <>
            <div className="container">
                {currentInvestment ?
                    <div style={{ direction: 'rtl' }}>
                        <h2>{currentInvestment.investmentName}</h2>
                        <div className="row justify-content-between">
                            <div className="col-8 p-4">
                                <img src={dimg} height="450" width="700" alt={`picture of ${currentInvestment.investmentName}`}></img>
                            </div>
                            <div className="col-4 p-5 ">
                                <h5>{currentRecruitment.RecruitmentTarget}$</h5>
                                <h5>from the recruitment target {Number(currentRecruitment.Recruitmented) * 100 / Number(currentRecruitment.RecruitmentTarget)}</h5>
                                <ProgressBar now={60} />
                                <h5>So far investors:</h5>
                                <h5>{currentRecruitment.sumInvestors}</h5>
                                <h5>{Math.round(Math.abs((currentInvestment.dateCreateInvestment - currentInvestment.dateEnd) / oneDay))} dayes left</h5>
                                <Link to={`/deal/${investmentId}`}>
                                    <button className="btn btn-outline-success m-3">!I Want To Invest</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    : " "
                }
            </div>
        </>
    )
}