import React, { useContext, useEffect, useState } from 'react'
import FooterMenu from '../FooterMenu/FooterMenu'
import MenuHeader from '../MenuHeader/MenuHeader'
import MainContainer from '../../components/MainContainer/MainContainer'
import CardCart from './CardCart'
import {Rectangle, DivBotaoConfirma, FormaPagamento, DivPrecos, Endereco_entrega, Rua_cliente, Restaurante, Rua_restaurante, Tempo,  Frete, PrecoSubtotal, Subtotal, OpcaoPagamento, RadiobuttonUnchecked, RadiobuttonChecked, Fill, BotaoConfirma, TextoVazio, DivRadio, Container, DivPadding} from './Styled'
import { useRequestData } from '../../hooks/useRequestData'
import GlobalStateContext from '../../global/GlobalStateContext'
import {LinearProgressGlobal} from '../../GlobalStyle'

const ComponentCart = ({onChangePaymentMethod, onClickConfim, paymentMethod, loading}) => {
    const [profile, setProfile] = useRequestData("profile", {});
    const { cart, setCart, restaurantDetail } = useContext(GlobalStateContext)
    console.log(cart)
    const [priceToPay, setPriceToPay] = useState(0)
    let payment = 'creditcard'

    useEffect(() => {
    let currentTotal = 0
    cart.forEach((product) => {
      currentTotal += product.price * product.quantity
    })
    setPriceToPay()
  })

    console.log(restaurantDetail)
    
    return(
        <Container>
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
                   {restaurantDetail.name}
            </Restaurante>    
            <Rua_restaurante>
                 {restaurantDetail.address}
            </Rua_restaurante>
            <Tempo>
            {restaurantDetail.deliveryTime} min
            </Tempo>

            {cart.length > 0 ? cart.map((product) => {
                return <CardCart product={product}/> 
            })
            :
            <TextoVazio>
                Carrinho Vazio
            </TextoVazio>} 
<DivPadding>
            {restaurantDetail && 
                    <Frete>
                        Frete R$ {restaurantDetail.shipping} 
                    </Frete>}
                    <DivPrecos>
                        <Subtotal>
                            SUBTOTAL
                        </Subtotal>
                        <PrecoSubtotal>
                            R$ {cart.reduce((acc,item) => {
                                return acc += item.price
                            }, 0) + restaurantDetail.shipping}
                        </PrecoSubtotal>
                    </DivPrecos>
                    <FormaPagamento>
                        Pagamento
                        <hr/>
                    </FormaPagamento>
                    <OpcaoPagamento>
                        <DivRadio>
                            <RadiobuttonChecked name='teste' type='radio'
                                onClick={() => onChangePaymentMethod('money')}
                                value='money'
                                checked={paymentMethod === 'money'}
                                />
                               
                        </DivRadio>
                                Dinheiro
                    </OpcaoPagamento>

                    <OpcaoPagamento>
                        <DivRadio>
                            <RadiobuttonChecked name='teste' type='radio' 
                         onClick={() => onChangePaymentMethod('creditcard')}
                            value='creditcard'
                            checked={paymentMethod === 'creditcard'}
                            />
                        </DivRadio>
                        Cartão
                    </OpcaoPagamento>
                  
                    <DivBotaoConfirma onClick={onClickConfim}>  
                     {loading &&  <LinearProgressGlobal/>}
                        <BotaoConfirma >
                            Confirma
                        </BotaoConfirma>
                    </DivBotaoConfirma>
                    </DivPadding>
                    <FooterMenu currentPage="Cart"/>
        </Container>
        
        )
}

export default ComponentCart