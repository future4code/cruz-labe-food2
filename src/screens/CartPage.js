import React, {useContext} from 'react'
import GlobalStateContext from '../global/GlobalStateContext'
import CardCart from '../components/CardCart/CardCart'
import FooterMenu from '../components/FooterMenu/FooterMenu'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'


const CartPage = () => {
    const { cart, setCart } = useContext(GlobalStateContext)
    const products = [] // inserir estado global dos produtos 


    const placeOrder = () => {
        const body = {
            "products": [{
                "id": "CnKdjU6CyKakQDGHzNln",
                "quantity": 10
            }, {
                "quantity": 1,
                "id": "KJqMl2DxeShkSBevKVre"
            }],
            "paymentMethod": "creditcard"
        }
        axios.get(`${BASE_URL}restaurants/1/order`, body, {
        headers: {
            auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im95ZHhmT3IxSlFWbmpJZTBxMEMyIiwibmFtZSI6IkFuZHJlIiwiZW1haWwiOiJhbmRyZUBmdXR1cmU0LmNvbSIsImNwZiI6IjIyMi4yMjIuMjIyLTU1IiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTYyMDE1NDM3Mn0.ncNcA4RIwKkbWfAbr1cKD9HBxDkmClOqClOhspbzzmM'
        }
    })
    .then((res)=> {
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
    }

    return (
            <div>
                <CardCart onClick={placeOrder}/>
                
            </div>
            )

}

export default CartPage;