import React from 'react'
import { DivDetalhes,BotaoRemover, Item_card, Card, ImageDiv, NomeDoItem, DetalhePedido, Preco, Remover, Quantidade, Numero, DivFuncionalidades } from './Styled'

const CardCart = (props) => {
    return(
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
        )
}

export default CardCart