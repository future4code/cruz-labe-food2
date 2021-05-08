import { PinDropSharp } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import Dialog from '../../components/Dialog/Dialog'

import {
  DivDetalhes,
  BotaoRemover,
  BotaoAdicinar,
  Item_card,
  Card,
  ImageDiv,
  NomeDoItem,
  DetalhePedido,
  Preco,
  TextButton,
  Quantidade,
  Numero,
  DivFuncionalidades,

} from "./Styled";

const CardCart = ({product, restaurant}) => {
    const [openDialog, setOpenDialog] = useState()
    const { cart, setCart, restaurantDetail, setRestaurantDetail } = useContext(GlobalStateContext)

const addItemCart = (quantity)=>{


  if(!restaurantDetail || !restaurantDetail.id || restaurant.id !== restaurantDetail.id){
    console.log(product)
    setRestaurantDetail(restaurant)
    setCart([{...product, quantity}])
  }
  else{
    if(quantity>0){
    setCart([...cart, {...product, quantity}])
    }
  }
}
const removeItemCart = () => {
  const index = cart.findIndex((cartProduct) => {
    return cartProduct.id === product.id
  })
  if(index >- 1){
    const cartRemoveItem = [...cart]
    cartRemoveItem.splice(index, 1)
    setCart(cartRemoveItem)
  }
}
    return (
    <Item_card>

      {product && 
      <Card>
        <ImageDiv src={product.photoUrl} alt={product.name} />

        <DivDetalhes>
          <NomeDoItem>{product.name}</NomeDoItem>
          <DetalhePedido>{product.description}</DetalhePedido>
          <Preco>R${product.price}</Preco>
        </DivDetalhes>

        <DivFuncionalidades>
        {product.quantity >0 &&
            <Quantidade>
              <Numero>{product.quantity}</Numero>
            </Quantidade>
            }

            {product.quantity && product.quantity > 0?
             <BotaoRemover onClick={removeItemCart}>
             <TextButton>Remover</TextButton>
           </BotaoRemover>:
              <BotaoAdicinar onClick={() => setOpenDialog(true)}>
              <TextButton>Adicionar</TextButton>
              </BotaoAdicinar>
            }
            {<Dialog 
            open={openDialog} 
            setOpen={setOpenDialog}
            id={product.id}
            addItemCart={addItemCart}
            />}
        </DivFuncionalidades>
       
      </Card>
}
    </Item_card>
  );
};

export default CardCart;
