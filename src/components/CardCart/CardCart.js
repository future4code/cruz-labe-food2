import React from "react";
import {
  DivDetalhes,
  BotaoRemover,
  Item_card,
  Card,
  ImageDiv,
  NomeDoItem,
  DetalhePedido,
  Preco,
  Remover,
  Quantidade,
  Numero,
  DivFuncionalidades,
} from "./Styled";

const CardCart = ({ name, description, price, image, quantity }) => {
  return (
    <Item_card>

      <Card>

        <ImageDiv src={image} alt={name} />

        <DivDetalhes>
          <NomeDoItem>{name}</NomeDoItem>
          <DetalhePedido>{description}</DetalhePedido>
          <Preco>R${price}</Preco>
        </DivDetalhes>

        <DivFuncionalidades>

            <Quantidade>
              <Numero>{quantity}</Numero>
            </Quantidade>

            <BotaoRemover>
              <Remover>remover</Remover>
            </BotaoRemover>

        </DivFuncionalidades>

      </Card>

    </Item_card>
  );
};

export default CardCart;
