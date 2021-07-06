import { actions } from '../actions/action'
import $ from 'jquery'

export const getData = ({ getState, dispatch }) => (next) => (action) => {
    // let url = window.location;
    // let userName = (url.pathname.split('/')[1]);

    if (action.type == "CREATE_INVESTMENT") {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "investmentName": actions.payload.investmentName,
            "description": actions.payload.description,
            "createInvestment": actions.payload.createInvestment,
            "dateEnd": actions.payload.dateEnd,
            "RecruitmentTarget": actions.payload.RecruitmentTarget,
            "ShareValue": actions.payload.ShareValue,
            // "sumInvestors": payload.sumInvestors,
            // "RecruitmentRoundTime": payload.RecruitmentRoundTime
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3008/createInvestment", requestOptions)
            .then(response => response.json())
            .then(result => {
                dispatch(actions.setInvestment(result))
                console.log("next")
            })
            .catch(error => console.log('error', error));

    }
    if (action.type == 'INIT_DATA') {
        debugger
        var settings = {
            "url": "http://localhost:3008/getAllInvestments",
            "method": "GET",
            "timeout": 0,
          };
          
          $.ajax(settings).done(function (response) {
               dispatch(actions.getAllInvestmet(response))

          });
        debugger
        // var raw = "";

        // var requestOptions = {
        //     method: 'GET',
        //     body: raw,
        //     redirect: 'follow'
        // };

        // fetch("http://localhost:3008/getAllInvestments", requestOptions)
        //     .then(response => response.json())
        //     .then(result => {
        //         debugger
        //         dispatch(actions.setInvestment(result))
        //         debugger
        //         dispatch(actions.getAllInvestmet(result))
        //         debugger
        //         console.log(result)
        //     })
        //     .catch(error => console.log('error', error));
    }
    return next(action)
}