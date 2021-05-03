import React from 'react'
import { GlobalStateContext } from '../global/GlobalStateContext'
import CardCart from '../components/CardCart/CardCart'

const CartPage = () => {
    const { cart, setCart } = useContext(GlobalStateContext)
    const products = [] // inserir estado global dos produtos 

    const addItemToCart = (newItem) => {
        const index = cart.findIndex((i) => i.id === newItem.id);
        let newCart = [...cart]
        if (index === -1) {
            newCart.push({ ...newItem, amount: 1})
        } else {
            newCart[index].amount += 1
        }
        setCart(newCart)
        alert('Prato adicionado ao carrinho!')
    }


    return (
            <div>
                <CardCart/>
            </div>
            )

}

export default CartPage