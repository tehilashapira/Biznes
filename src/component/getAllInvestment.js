import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function GetAllInvestment(props) {

    const investmentList = useSelector(state => state.reducerInvestment.investment)
    const recruitmentList = useSelector(state => state.reducerInvestment.recruitment)
    const userName=useSelector(state=>state.reducerUser.userName)

    console.log(investmentList)
    return (
        <>
            <h1>Biznes</h1>
            <ul className="container">
                <div className="row p-4">
                    <Link to={`/createInvestment`}>
                        <Button variant="primary" size="lg" >
                            Create New Investment+
                        </Button>
                    </Link>
                    <Link to={`/${userName}/deal`}>
                        <Button variant="primary" size="lg" >
                            deal
                        </Button>
                    </Link>
                </div>
                <div className="row p-3">
                    {investmentList ?

                        investmentList.map((investment) => {
                            return (
                                <div className="col-3 p-3">
                                    <Link to={`displayInvestment/${investment._id}`}>
                                        <Card>
                                            <Card.Img variant="top" src="holder.js/100px160" />
                                            <Card.Body>
                                                <Card.Title>{investment.investmentName}</Card.Title>
                                                <Card.Text>
                                                    {investment.description}
                                                </Card.Text>
                                                {/* <Link to={`editInvestment/${userName}/${investment._id}`}>
                                                    <Button variant="primary">Edit</Button>
                                                </Link> */}
                                                <Link to={`/${userName}/editInvestment/${investment._id}`}>
                                                    <Button variant="primary">Edit</Button>
                                                </Link>
                                            </Card.Body>
                                            <Card.Footer>
                                                <small className="text-muted">date created investment: {investment.dateCreateInvestment}</small>
                                            </Card.Footer>
                                        </Card>
                                    </Link>
                                </div>
                            )
                        })
                        : " "
                    }</div>
            </ul>
        </>
    )
}