import { PinDropSharp } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
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

const CardCart = ({product, addItemToCart}) => {

    return (
    <Item_card>

      {product && 
      <Card>

        <ImageDiv src={product.image} alt={product.name} />

        <DivDetalhes>
          <NomeDoItem>{product.name}</NomeDoItem>
          <DetalhePedido>{product.description}</DetalhePedido>
          <Preco>R${product.price}</Preco>
        </DivDetalhes>

        <DivFuncionalidades>

            <Quantidade>
              <Numero>{product.quantity}</Numero>
            </Quantidade>

            {/* <BotaoRemover>
              <Remover>remover</Remover>
            </BotaoRemover> */}

            <BotaoRemover onClick={() => addItemToCart(product, 1)}>
              <Remover>adicionar</Remover>
            </BotaoRemover>

        </DivFuncionalidades>

      </Card>
}
    </Item_card>
  );
};

export default CardCart;
