import React from 'react'
import { DivDetalhes,BotaoRemover, Item_card, Card, ImageDiv, NomeDoItem, DetalhePedido, Preco, Remover, Quantidade, Numero, DivFuncionalidades } from './Styled'

const CardCart = ({name, description, price, image}) => {
    return(
            <Item_card>
                <Card>
                    <ImageDiv src={image} alt='pedido'/>
                    <DivDetalhes>
                        <NomeDoItem>
                            {/* Pedido */}
                            {name}
                        </NomeDoItem>
                        <DetalhePedido>
                            {/* burguer, queijo, picles */}
                            {description}
                        </DetalhePedido>
                        <Preco>
                            {/* 10,00R$ */}
                            {price}
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