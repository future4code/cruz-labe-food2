import {BASE_URL} from '../constants/urls';
import axios from 'axios'
import {goToSignUpAddress, goToHome, goToProfile} from '../Routes/Coordinators';

export const signup = (body, history, setSnack) => {
    setSnack({text: ""})
    axios.post(`${BASE_URL}signup`, body)
    .then((res)=> {
        console.log(res)
        localStorage.setItem('user', JSON.stringify(res.data))
        goToSignUpAddress(history)
    }).catch((err)=>{
        console.log(err)
        setSnack(
            {text: "Não foi possível criar cadastro. Verifique se e-mail e/ou CPF já estão registrados em outra conta!",
            sucess: false
        })
    })
}

export const login = (body, history, setSnack) => {
    setSnack({text: ""})
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
        console.log(err)
        
    setSnack(
        {text: "E-mail e/ou senha incorreta",
        sucess: false
    })
        
    })
}

export const putAddress = (body, history, goTo, setSnack) => {
    const user = JSON.parse(localStorage.getItem('user'))
    setSnack({text: ""})
    axios.put(`${BASE_URL}address`, body, {
        headers: {
            auth: user.token
        }
    })
    .then((res)=> {
        console.log(res)
        localStorage.setItem('user', JSON.stringify(res.data))
        goTo(history)
    }).catch((err)=>{
        console.log(err)
        setSnack(
            {text: "Não foi possível adicionar endereço, tente novamente!",
            sucess: false
        })
    })
}

export const updateProfile = (body, history) => {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(`${BASE_URL}profile`)
    axios.put(`${BASE_URL}profile`, body, {
        headers: {
            auth: user.token
        }
    })
    .then((res)=> {
        console.log(res)
        goToProfile(history)
    }).catch((err)=>{
        console.log(err)
        alert('Não foi possível atualizar seus dados. Tente novamente!')
    })
}

export const updateAddress = (body, history, setSnack) => {
    putAddress(body, history, goToProfile, setSnack)
}

export const addAddress = (body, history, setSnack) => {
    putAddress(body, history, goToHome, setSnack)
}