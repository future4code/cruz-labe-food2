import React, {useContext, useState} from 'react'
import GlobalStateContext from '../global/GlobalStateContext'
import CardCart from '../components/CardCart/CardCart'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import ComponentCart from '../components/CardCart/ComponentCart'


const CartPage = () => {
    const { cart, setCart } = useContext(GlobalStateContext)
    const products = [] // inserir estado global dos produtos
    const [paymentMethod, setPaymentMethod] = useState('creditcard')
    console.log(paymentMethod) 

    const dinheiro = () => {
        setPaymentMethod('money')
        console.log(paymentMethod)
    }

    const cartao = () => {    
        setPaymentMethod('creditcard')
        console.log(paymentMethod)
    }

    const placeOrder = () => {
        const body = {
            "products": [{
                "id": "3vcYYSOEf8dKeTPd7vHe",
                "quantity": 10
            }, {
                "quantity": 1,
                "id": "5omTFSOBYiTqeiDwhiBx"
            }],
            "paymentMethod": paymentMethod
        }
        axios.post(`${BASE_URL}restaurants/1/order`, body, {
        headers: {
            auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im95ZHhmT3IxSlFWbmpJZTBxMEMyIiwibmFtZSI6IkFuZHJlIiwiZW1haWwiOiJhbmRyZUBmdXR1cmU0LmNvbSIsImNwZiI6IjIyMi4yMjIuMjIyLTU1IiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTYyMDE1NDM3Mn0.ncNcA4RIwKkbWfAbr1cKD9HBxDkmClOqClOhspbzzmM'
        }
    })
    .then((res)=> {
        console.log(res)
        console.log(paymentMethod)
    }).catch((err)=>{
        console.log(err)
    })
    }

    return (
            <div>
                <ComponentCart onClick={placeOrder} payCard = {cartao} payMoney = {dinheiro}/>
                
            </div>
            )

}

export default CartPage;