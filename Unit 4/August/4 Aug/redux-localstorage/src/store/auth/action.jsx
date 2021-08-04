import { AUTH_REQ, AUTH_FAIL, AUTH_SUCC } from './actionTypes'


export const AuthReq = () => {
    return {
        type: AUTH_REQ
    }
}
export const AuthSucc = (data) => {
    return {
        type: AUTH_SUCC,
        payLoad: data
    }
}
export const AuthFail = (data) => {
    return {
        type: AUTH_FAIL,
        payLoad: data
    }
}