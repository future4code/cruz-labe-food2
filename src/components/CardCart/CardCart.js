import  DialogCart  from "../../components/Dialog/Dialog";
import { PinDropSharp } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import {
  DivDetalhes,
  BotaoCard,
  Item_card,
  Card,
  ImageDiv,
  NomeDoItem,
  DetalhePedido,
  Preco,
  TextoBotaoCard,
  Quantidade,
  Numero,
  DivFuncionalidades,
} from "./Styled";

const CardCart = ({product, addItemToCart, removeItemToCart}) => {
    const [isOpenDialog, setIsOpenDialog] = useState(false)
    const [quantity, setQuantity] = useState(0)
    
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

            {product.quantity > 0 &&
             <Quantidade>
              <Numero>{product.quantity}</Numero>
            </Quantidade>}

            {/* <BotaoRemover>
              <Remover>remover</Remover>
            </BotaoRemover> */}

            <BotaoCard onClick={product.quantity > 0 ? (() => removeItemToCart(product)) : 
                () => setIsOpenDialog(true) }>
                    { <DialogCart open={isOpenDialog} 
                        setOpen={setIsOpenDialog} 
                        addItemToCart={addItemToCart} 
                        product={product}
                        setQuantityCard={setQuantity}/>}
              <TextoBotaoCard>{product.quantity > 0 ? "remover" : "adicionar"}</TextoBotaoCard>
            </BotaoCard>

        </DivFuncionalidades>

      </Card>
}
    </Item_card>
  );
};

export default CardCart;
