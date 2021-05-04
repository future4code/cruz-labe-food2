import React from 'react'
import FooterMenu from '../FooterMenu/FooterMenu'
import MenuHeader from '../MenuHeader/MenuHeader'
import {Rectangle, Carrinho, DivBotaoConfirma, FormaPagamento, DivPrecos, DivDetalhes,BotaoRemover, Endereco_entrega, Rua_cliente, Restaurante, Rua_restaurante, Tempo, Item_card, Card, ImageDiv, NomeDoItem, DetalhePedido, Preco, Remover, Quantidade, Numero, DivFuncionalidades, Frete, PrecoSubtotal, Subtotal, OpcaoPagamento, RadiobuttonUnchecked, RadiobuttonChecked, Fill, BotaoConfirma} from './Styled'

const ComponentCart = () => {
    return(
        <Carrinho>
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
            <Item_card>
                <Card>
                    <ImageDiv alt='pedido'/>
                    <DivDetalhes>
                        <NomeDoItem>
                            Pedido
                        </NomeDoItem>
                        <DetalhePedido>
                            burguer, queijo, picles
                        </DetalhePedido>
                        <Preco>
                            10,00R$
                        </Preco>
                    </DivDetalhes>
                    
                    <DivFuncionalidades>
                        <Quantidade>
                            <Numero>
                                2
                            </Numero>
                        </Quantidade>
                        <BotaoRemover>
                            <Remover>
                                remover
                            </Remover>
                        </BotaoRemover>
                    </DivFuncionalidades>
                </Card>
            </Item_card>
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
                        <BotaoConfirma>
                            Confirma
                        </BotaoConfirma>
                    </DivBotaoConfirma>
                    <FooterMenu/>
        </Carrinho>

        )
}

export default ComponentCart