import React, {useContext, useState} from 'react'
import GlobalStateContext from '../global/GlobalStateContext'
import CardCart from '../components/CardCart/CardCart'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import ComponentCart from '../components/CardCart/ComponentCart'


const CartPage = () => {
    const { cart, setCart } = useContext(GlobalStateContext)
    const [paymentMethod, setPaymentMethod] = useState('creditcard')
    const user = JSON.parse(localStorage.getItem("user"));
    const restaurant = JSON.parse(localStorage.getItem('restaurant'))
    console.log(paymentMethod) 

    const dinheiro = () => {
        setPaymentMethod('money')
        console.log(paymentMethod)
    }

    const cartao = () => {    
        setPaymentMethod('creditcard')
        console.log(paymentMethod)
    }

    const products = cart.map((product) => {
        return {id: product.id, quantity: product.quantity}
    })

    const placeOrder = () => {
        const body = {
            "products": products,
            "paymentMethod": paymentMethod
        }
        axios.post(`${BASE_URL}restaurants/${restaurant.id}/order`, body, {
        headers: {
            auth: user.token
        }
    })
    .then((res)=> {
        console.log(res)
        localStorage.removeItem('restaurant')
        setCart([]) 
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