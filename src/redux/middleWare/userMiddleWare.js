import { actions } from '../actions/action'
import $ from 'jquery'

export const getData = ({ getState, dispatch }) => (next) => (action) => {


    //login
    if (action.type === 'EXTRACT_JWT') {
        let url2 = (new URL(document.location))
        let params = url2.searchParams;
        let userName = url2.pathname.split('/')[1]
        if (userName) {
            dispatch(actions.updateUserName(userName))
        }
        let jwtGlobal = params.get('jwt');
        if (jwtGlobal) {
            let newUrl = window.location.href
            newUrl = newUrl.split('?jwt=')
            newUrl = newUrl[0]
            let date = new Date(Date.now() + 86400e3);
            date = date.toUTCString();
            var expires = "expires=" + date;
            document.cookie = "devJwt" + "=" + jwtGlobal + ";" + expires + ";path=/";
            window.location.replace(newUrl)
        }
        let url = window.location

    }
    return next(action)

}