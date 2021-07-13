import { actions } from '../actions/action'
import $ from 'jquery'

export const getData = ({ getState, dispatch }) => (next) => (action) => {
    // let url = window.location;
    // let userName = (url.pathname.split('/')[1]);

    if (action.type == "CREATE_INVESTMENT") {
        debugger
        var myHeaders = new Headers();
        // myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI0a3F0Q2RBM0Z4Y2dNYzBQOHJ6Tk90eTR3ejAzIiwiZW1haWwiOiJtaXJpQGxlYWRlci5jb2RlcyIsImlhdCI6MTYyMzY1NTA5N30.u8PdX0AXdt7qyIP1XmmXgxq4wAdxBdaI_cRpvhJ8ATQ");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "investmentName": action.payload.investmentName,
            "description": action.payload.description,
            "dateCreateInvestment": action.payload.dateCreateInvestment,
            "dateEnd": action.payload.dateEnd,
            "RecruitmentTarget": action.payload.recruitmentTarget,
            "ShareValue": action.payload.shareValue,
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
                debugger
                console.log("result", result);
                dispatch(actions.setInvestment(result))
            })
            .catch(error => console.log('error', error));
    }


    // if (action.type == 'UPLOAD_IMAGE') {

    //     var fileToUpload = $("#uploadInput")[0].files[0];

    //     var myFile = new FormData();
    //     myFile.append("file", fileToUpload);

    //     $.ajax({

    //         type: "POST",
    //         url: "https://files.codes/api/" + userName + "/upload",
    //         headers: { Authorization: jwtFromCookie },
    //         data: myFile,
    //         processData: false,
    //         contentType: false,
    //         success: (data) => {
    //             alert("upload success");
    //             console.log(data)

    //         },
    //         error: function (err) {
    //             alert('please try again later');

    //         },
    //     });

    // }




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
    }
    
    if (action.type == 'EDIT_INVESTMENT') {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "investmentId": action.payload.investmentId,
            "investmentName": action.payload.investmentName,
            "description": action.payload.description,
            "dateCreateInvestment": action.payload.dateCreateInvestment,
            "dateEnd": action.payload.dateEnd,
            "recruitmentId": action.payload.recruitmentId,
            "RecruitmentTarget": action.payload.recruitmentTarget,
            "ShareValue": action.payload.shareValue
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`http://localhost:3008/${getState.userName}/editInvestment/${action.payload.investmentId}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("result", result);
                dispatch({ type: 'INIT_DATA' })
            })
            .catch(error => console.log('error', error));
    }



    //login
//     if (action.type === 'EXTRACT_JWT') {
// let url2=(new URL(document.location))
//         let params = url2.searchParams;
//         let userName=url2.pathname.split('/')[1]
//         if(userName)
//         {
//             dispatch(actions.updateUserName(userName))
//         }
//         let jwtGlobal = params.get('jwt');
//         if (jwtGlobal) {
//             let newUrl = window.location.href
//             newUrl = newUrl.split('?jwt=')
//             newUrl = newUrl[0]
//             let date = new Date(Date.now() + 86400e3);
//             date = date.toUTCString();
//             var expires = "expires=" + date;
//             document.cookie = "devJwt" + "=" + jwtGlobal + ";" + expires + ";path=/";
//             window.location.replace(newUrl)
//         }
//         let url = window.location

//     }
    return next(action)
}