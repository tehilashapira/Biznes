import React, { useRef } from 'react'
import Form from 'react-bootstrap/Form'
import { actions } from '../redux/actions/action'
import { useSelector, useDispatch } from 'react-redux'


export default function Investment() {
    const investmentName = useRef('');
    const description = useRef('');
    const dateCreateInvestment = useRef('');
    const dateEnd = useRef('');
    const recruitmentTaerget = useRef('');
    const shareValue = useRef('');

    const dispatch = useDispatch();

    function createInvestment() {
        dispatch(actions.createInvestment({
            investmentName: investmentName.current.value,
            description: description.current.value,
            dateCreateInvestment: dateCreateInvestment.current.value,
            dateEnd: dateEnd.current.value,
            recruitmentTaerget: recruitmentTaerget.current.value,
            shareValue: shareValue.current.value
        }))
    }

    return (
        <>
            <Form>
                <Form.Group >
                    <Form.Label>Investment Name</Form.Label>
                    <Form.Control type="text" placeholder="Investment Name" ref={investmentName} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" ref={description} />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Date Create Investment</Form.Label>
                    <Form.Control type="date" placeholder="Date Create Investment" ref={dateCreateInvestment} />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Date End</Form.Label>
                    <Form.Control type="date" placeholder="Date End" ref={dateEnd} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Recruitment Target</Form.Label>
                    <Form.Control type="text" placeholder="Recruitment Target" ref={recruitmentTaerget} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Share Value</Form.Label>
                    <Form.Control type="text" placeholder="Share Value" ref={shareValue} />
                </Form.Group>
            </Form>
            <button onClick={createInvestment}>submit</button>
        </>
    )
}