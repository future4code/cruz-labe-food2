import React from 'react'
import { GlobalStateContext } from '../global/GlobalStateContext'

const CartPage = () => {
    const { cart, setCart } = useContext(GlobalStateContext)

    return (<div>Cart Page</div>)

}

export default CartPage