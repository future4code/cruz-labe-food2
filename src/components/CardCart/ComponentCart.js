import React from 'react'
import FooterMenu from '../FooterMenu/FooterMenu'
import MenuHeader from '../MenuHeader/MenuHeader'
import MainContainer from '../../components/MainContainer/MainContainer'
import CardCart from './CardCart'
import {Rectangle, DivBotaoConfirma, FormaPagamento, DivPrecos, Endereco_entrega, Rua_cliente, Restaurante, Rua_restaurante, Tempo,  Frete, PrecoSubtotal, Subtotal, OpcaoPagamento, RadiobuttonUnchecked, RadiobuttonChecked, Fill, BotaoConfirma} from './Styled'

const ComponentCart = (props) => {
    return(
        <MainContainer>
        {/* <Carrinho> */}
            <MenuHeader currentPageLabel='Meu Carrinho'/>
            <Rectangle>
                <Endereco_entrega>
                    Endereço de entrega
                </Endereco_entrega>
                <Rua_cliente>
                    Vem por props, 0
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

            <CardCart/>

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
                        <RadiobuttonChecked>
                            <Fill/>
                        </RadiobuttonChecked>
                        Dinheiro
                    </OpcaoPagamento>
                    <OpcaoPagamento>
                        <RadiobuttonUnchecked/>
                        Cartão
                    </OpcaoPagamento>
                    <DivBotaoConfirma>
                        <BotaoConfirma onClick={props.onClick}>
                            Confirma
                        </BotaoConfirma>
                    </DivBotaoConfirma>
                    <FooterMenu/>
        {/* </Carrinho> */}
        </MainContainer>
        )
}

export default ComponentCart