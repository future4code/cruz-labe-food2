import React, { useContext, useEffect, useState } from 'react'
import FooterMenu from '../FooterMenu/FooterMenu'
import MenuHeader from '../MenuHeader/MenuHeader'
import MainContainer from '../../components/MainContainer/MainContainer'
import CardCart from './CardCart'
import {Rectangle, DivBotaoConfirma, FormaPagamento, DivPrecos, Endereco_entrega, Rua_cliente, Restaurante, Rua_restaurante, Tempo,  Frete, PrecoSubtotal, Subtotal, OpcaoPagamento, RadiobuttonUnchecked, RadiobuttonChecked, Fill, BotaoConfirma, TextoVazio, DivRadio} from './Styled'
import { useRequestData } from '../../hooks/useRequestData'
import GlobalStateContext from '../../global/GlobalStateContext'
import radiobuttonUnchecked from '../../assets/radiobutton-unchecked.svg'
import radiobuttonChecked from '../../assets/radiobutton-checked.svg'

const ComponentCart = (props) => {
    const [profile, setProfile] = useRequestData("profile", {});
    const { cart, setCart } = useContext(GlobalStateContext)
    const [priceToPay, setPriceToPay] = useState(0)
    let payment = 'creditcard'

    const dinheiro = () => {
        payment = 'money'
        console.log(payment) 
    }
    const cartao = () => {
        payment = 'creditcard'
        console.log(payment) 
    }

    useEffect(() => {
    let currentTotal = 0
    cart.forEach((product) => {
      currentTotal += product.price * product.quantity
    })
    setPriceToPay()
  })

  const removeItemToCart = (itemToRemove) => {
    const index = cart.findIndex((i) => i.id === itemToRemove.id)
    let newCart = [...cart]
    if (index === 1) {
      newCart.splice(index, 1)
    } else {
      newCart[index].quantity -= 1 
    }
    setCart(newCart)
  }
    
    return(
        <MainContainer>
            <MenuHeader currentPageLabel='Meu Carrinho'/>
            <Rectangle>
                <Endereco_entrega>
                    Endereço de entrega
                </Endereco_entrega>
                <Rua_cliente>
                    {profile.user && profile.user.address}
                </Rua_cliente>   
            </Rectangle>
            <Restaurante>
                Nome do restaurante
            </Restaurante>    
            <Rua_restaurante>
                Rua que vem por props, 0
            </Rua_restaurante>
            <Tempo>
                30-40 min
            </Tempo>

            {cart.length > 0 ? cart.map((product) => {
                return <CardCart/> 
            })
            :
            <TextoVazio>
                Carrinho Vazio
            </TextoVazio>} 

                    <Frete>
                        Frete R$
                    </Frete>
                    <DivPrecos>
                        <Subtotal>
                            SUBTOTAL
                        </Subtotal>
                        <PrecoSubtotal>
                            R$ 60,00
                        </PrecoSubtotal>
                    </DivPrecos>
                    <FormaPagamento>
                        Pagamento
                        <hr/>
                    </FormaPagamento>
                    <OpcaoPagamento>
                        <DivRadio>
                            <RadiobuttonChecked name='teste' type='radio'
                                onClick={dinheiro}
                                value='money'/>
                        </DivRadio>
                                Dinheiro
                    </OpcaoPagamento>

                    <OpcaoPagamento>
                        <DivRadio>
                            <RadiobuttonChecked name='teste' type='radio' 
                            onClick={cartao}
                            value='creditcard'/>
                        </DivRadio>
                        Cartão
                    </OpcaoPagamento>
                    <DivBotaoConfirma>
                        <BotaoConfirma onClick={props.onClick}>
                            Confirma
                        </BotaoConfirma>
                    </DivBotaoConfirma>
                    
                    <FooterMenu/>
        </MainContainer>
        
        )
}

export default ComponentCart