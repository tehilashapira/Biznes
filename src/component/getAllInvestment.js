import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Card, Button } from 'react-bootstrap'
import { actions } from '../redux/actions/action'
import { Link } from 'react-router-dom'

export default function GetAllInvestment() {

    const investmentList = useSelector(state => state.reducerInvestment.investment)
    const recruitmentList = useSelector(state => state.reducerInvestment.recruitment)

    console.log(investmentList[0])
    return (
        <>
            <h1>Biznes</h1>
            <ul className="container">
                <div className="row p-4">
                    <Link to='/createInvestment'>
                        <Button variant="primary" size="lg" >
                            Create New Investment+
                        </Button>
                    </Link>
                </div>
                <div className="row p-3">
                    {investmentList[0] ?

                        investmentList.map(investment => {
                            return (
                                <div className="col-3 p-3">

                                    <Card>
                                        <Card.Img variant="top" src="holder.js/100px160" />
                                        <Card.Body>
                                            <Card.Title>{investment.investmentName}</Card.Title>
                                            <Card.Text>
                                                {investment.description}
                                            </Card.Text>
                                            <Button variant="primary">Edit</Button>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">date created investment: {investment.dateCreateInvestment}</small>
                                        </Card.Footer>
                                    </Card>
                                </div>
                            )
                        })
                        : " "
                    }</div>
            </ul>
        </>
    )
}