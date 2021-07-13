import React, { useRef } from 'react'
import Form from 'react-bootstrap/Form'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { actions } from '../redux/actions/action'
import {history,withRouter} from 'react-router-dom'

export default withRouter( function EditInvestment(props){

    const {history}=props

    const investmentName = useRef('')
    const description = useRef('')
    const dateCreateInvestment = useRef('')
    const dateEnd = useRef('')
    const recruitmentTarget = useRef('')
    const shareValue = useRef('')

    const investment = useSelector(state => state.reducerInvestment.investment)
    const recruitment = useSelector(state => state.reducerInvestment.recruitment)
    const dispatch = useDispatch()

    const {investmentId}=useParams()
    const currentInvestment=investment[investment.indexOf(investment.find(i=>i["_id"]==investmentId))]
    const currentRecruitment=recruitment[recruitment.indexOf(recruitment.find(i=>i["investmentId"]==investmentId))]

    function editInvestment(){
        dispatch(actions.editInvestment({
            investmentId:investmentId,
            investmentName: investmentName.current.value,
            description: description.current.value,
            dateCreateInvestment: dateCreateInvestment.current.value,
            dateEnd: dateEnd.current.value,
            recruitmentId:currentRecruitment._id,
            recruitmentTarget: recruitmentTarget.current.value,
            shareValue: shareValue.current.value
        }))
        history.push('/getAllInvestments')
    }


    return(
        <>
            <div>
                {console.log("investid",investmentId),console.log("recid",currentRecruitment._id)}
            </div>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <h1 className="font-weight-bold text-success">Edit Investment</h1>
                </div>
                <div className="row">

                    <div className="col-3">

                    </div>
                    <div className="col-6">
                        <Form>
                            <Form.Group >
                                <Form.Label>Name of Investment</Form.Label>
                                <Form.Control type="text" defaultValue={currentInvestment.investmentName} ref={investmentName} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" defaultValue={currentInvestment.description} ref={description} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Date Create Investment</Form.Label>
                                <Form.Control type="date" defaultValue={currentInvestment.dateCreateInvestment} ref={dateCreateInvestment} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Date End</Form.Label>
                                <Form.Control type="date" defaultValue={currentInvestment.dateEnd} ref={dateEnd} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Recruitment Target</Form.Label>
                                <Form.Control type="text" defaultValue={currentRecruitment.recruitmentTarget} ref={recruitmentTarget} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Share Value</Form.Label>
                                <Form.Control type="text" defaultValue={currentRecruitment.shareValue} ref={shareValue} />
                            </Form.Group>
                            <Button>
                                upload image
                            </Button>
                        </Form>
                            <button className="btn btn-outline-success m-3" onClick={editInvestment}> SAVE CHANGES </button>&nbsp;&nbsp;
                    </div>
                </div>
            </div>
        </>
    )
})