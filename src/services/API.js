import {BASE_URL} from '../constants/urls';
import axios from 'axios'
import {goToSignUpAddress, goToHome, goToProfile} from '../Routes/Coordinators';

export const signup = (body, history) => {
    axios.post(`${BASE_URL}signup`, body)
    .then((res)=> {
        console.log(res)
        localStorage.setItem('user', JSON.stringify(res.data))
        goToSignUpAddress(history)
    }).catch((err)=>{
        console.log(err)
        alert('Não foi possível criar cadastro. Verifique se e-mail e/ou CPF já estão registrados em outra conta!')
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
        console.log(err)
        alert("E-mail e/ou senha incorreta")
    })
}

export const putAddress = (body, history, goTo) => {
    const user = JSON.parse(localStorage.getItem('user'))
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
        alert("Não foi possível adicionar endereço, tente novamente!")
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

export const updateAddress = (body, history) => {
    putAddress(body, history, goToProfile)
}

export const addAddress = (body, history) => {
    putAddress(body, history, goToHome)
}