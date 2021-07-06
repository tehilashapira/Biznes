import React,{useRef} from 'react'
import Form from 'react-bootstrap/Form'
import {actions} from '../redux/actions/actions'
import {useSelector,useDispatch} from 'react-redux'


export default function CreateInvestment() {
    const investmentName=useRef('')
    const description=useRef('')
    const dateCreateInvestment=useRef('')
    const dateEnd=useRef('')
    const recruitmentTarget=useRef('')
    const shareValue=useRef('')

    const dispatch = useDispatch()
    // const investments=useSelector(state=>state.reducerInvestment.investment)
    
    function createInvestment(){
        dispatch(actions.createInvestment({
            investmentName:investmentName.current.value,
            description:description.current.value,
            dateCreateInvestment:dateCreateInvestment.current.value,
            dateEnd:dateEnd.current.value,
            recruitmentTarget:recruitmentTarget.current.value,
            shareValue:shareValue.current.value
        }))
        
    }
    return (
        <>
         
            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                <h1 className="font-weight-bold text-success">Create Investment</h1>
                </div>
                <div className="row">

           
                <div className="col-3">

                </div>
                <div className="col-6">
                <Form>
                <Form.Group >
                    <Form.Label>Name of Investment</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" ref={investmentName}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" ref={description}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Date Create Investment</Form.Label>
                    <Form.Control type="date" placeholder="dateCreateInvestment" ref={dateCreateInvestment}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Date End</Form.Label>
                    <Form.Control type="date" placeholder="dateEnd" ref={dateEnd}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Recruitment Target</Form.Label>
                    <Form.Control type="text" placeholder="RecruitmentTarget" ref={recruitmentTarget}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Share Value</Form.Label>
                    <Form.Control type="text" placeholder="ShareValue" ref={shareValue}/>
                </Form.Group>           
            </Form> 
            <button className="btn btn-outline-success"onClick={createInvestment}> SAVE </button>&nbsp;&nbsp;
            <button className="btn btn-outline-success">Back To All Investments</button>
            </div>
            </div>
                    <div className="col-3">
                    
                    </div>
            </div> 
        </>
    )
}
