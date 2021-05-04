import {BASE_URL} from '../constants/urls';
import axios from 'axios'
import {goToSignUpAddress, goToHome} from '../Routes/Coordinators' 
export const signup = (body, history) => {
    axios.post(`${BASE_URL}signup`, body)
    .then((res)=> {
        console.log(res)
        localStorage.setItem('user', JSON.stringify(res.data))
        goToSignUpAddress(history)
    }).catch((err)=>{
        console.log(err)
    })
}
export const login = (body, history) => {
    axios.post(`${BASE_URL}login`, body)
    .then((res)=> {
        console.log(res)
        localStorage.setItem('user', JSON.stringify(res.data))
        if(!res.data.user.hasAddress)
        {
            goToSignUpAddress(history)
        }
        else{
            goToHome(history)
        }
    }).catch((err)=>{
        // console.log(err)
        alert("E-mail e/ou senha incorreta")
    })
}

export const addAdress = (body, history) => {
    const user = JSON.parse(localStorage.getItem('user'))
    axios.put(`${BASE_URL}address`, body, {
        headers: {
            auth: user.token
        }
    })
    .then((res)=> {
        console.log(res)
        localStorage.setItem('user', JSON.stringify(res.data))
        goToHome(history)
    }).catch((err)=>{
        console.log(err)
    })
}