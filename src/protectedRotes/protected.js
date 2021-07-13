import React, { useState, useEffect, useCallback } from 'react'
import { Route, Redirect } from 'react-router-dom';


function redirectToLogin(routes) {
    let isDevOrLocal = window.location.href.includes('dev') ? window.location.href.includes('dev') : window.location.href.includes('localhost') ? window.location.href.includes('localhost') : null
    let urlAccounts = `https://${isDevOrLocal ? 'dev.' : ''}accounts.codes`

    window.location.href = routes ?
        `${urlAccounts}/vlogger/login?routes=${routes}` :
        `${urlAccounts}/vlogger/login`;
    return null
}
const ProtectedRoute = ({ component: Component, user, ...rest }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let routes = rest.computedMatch.params.nameVideo;
    let userName = rest.computedMatch.params.userName;
    useEffect(() => {

        //חילוץ JWT מהקוקי
        let jwtFromCookie;
        if (window.location.hostname == "localhost") {
            jwtFromCookie = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJoaDh1SWpqblJDaFhVVmxwbkNSM0NMVjU3cHExIiwiZW1haWwiOiJ5YWVsbWFyZ2FsaXRAbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjI2MTY2MzgzfQ.6YP4sx8S0oFd6ymGOjAHUoe0EgavyYNFxoXPT95kGWY"
        }
        else {
            jwtFromCookie = document.cookie && document.cookie.includes('devJwt') ? document.cookie.split(";")
                .filter(s => s.includes('devJwt'))[0].split("=").pop() : null;

       }
        const isLocal = window.location.hostname == "localhost"
        const url = `https://magna.leader.codes/${userName}/isPermission?isLocal=${isLocal}`;
        const isPermission = async () => {
            let response = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: jwtFromCookie,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            if (response.status == 401) {
                setIsLoading(false)
                setIsLoggedIn(true)
            }
            else {
                setIsLoading(false)
            }
        }
        isPermission()
    }, [])

    return isLoading ? null : isLoggedIn ?
        redirectToLogin(routes)
        : <Route {...rest} render={props => { return <Component {...rest} {...props} /> }} />
}
export default ProtectedRoute
