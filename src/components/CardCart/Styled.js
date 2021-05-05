import styled from 'styled-components'

export const Title = styled.h4`
    width: 5.688rem;
    height: 1.188rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: var(--black);
` 

export const Carrinho = styled.div`
    width: 100%/*22.5rem*/;
    height: 48.813rem;
`

export const Rectangle = styled.div`
    width: 100%/*22.5rem*/;
    height: 4.75rem;
    margin: 0.063rem 0 1rem;
    padding: 1rem;
    background-color: #eeeeee;
`

export const Bar = styled.div`
    width: 100%/*22.5rem*/;
    height: 4rem;
    margin: 0 0 0.063rem;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
`

export const Endereco_entrega = styled.div`
    width: 100%/*20.5rem*/;
    height: 1.125rem;
    margin: 0 0 0.5rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
`

export const Rua_cliente = styled.div`
    width: 100%/*20.5rem*/;
    height: 1.125rem;
    margin: 0.5rem 0 0;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--black);
`

export const Restaurante = styled.div`
    width: 100%/*20.5rem*/;
    height: 1.125rem;
    margin: 1rem 1rem 0.5rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #e8222e;
`

export const Rua_restaurante = styled.div`
    width: 100%/*20.5rem*/;
    height: 1.125rem;
    margin: 0.5rem 1rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
`

export const Tempo = styled.div`
    width: 100%/*20.5rem*/;
    height: 1.125rem;
    margin: 0.5rem 1rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
`

export const Item_card = styled.div`
    width: 100%/*20.5rem*/;
    height: 7.5rem;
    margin: 0.5rem 0 0;
    padding: 0.5rem 1rem 0;
`

export const Card = styled.div`
    width: 100%/*20.5rem*/;
    height: 7rem;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    display: flex;
`

export const ImageDiv = styled.img`
    width: 6rem;
    height: 7rem;
    margin: 0 1rem 0 0;
    object-fit: contain;
`

export const NomeDoItem = styled.div`
    width: 10.438rem;
    height: 1.125rem;
    margin: 1.125rem 1rem 0.5rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #e8222e;
` 

export const DetalhePedido = styled.div`
    width: 12.5rem;
    height: 1.875rem;
    margin: 0.5rem 1rem 0.25rem;
    font-family: Roboto;
    font-size: 0.75rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #b8b8b8;
`
export const Preco = styled.div`
    width: 7.375rem;
    height: 1.188rem;
    margin: 0.25rem 0.5rem 0.938rem 1rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--black);
`

export const DivDetalhes = styled.div`
    display: flex;
    flex-direction: column;
`

export const BotaoRemover = styled.div`
    width: 5.625rem;
    height: 1.938rem;
    margin: /*0.438rem*/ 2.2rem 0 0 -3.4rem /*0.5rem*/;
    padding: 0.5rem 1.438rem 0.563rem 1.5rem;
    border-radius: 8px;
    border: solid 1px #e02020;
`

export const Remover = styled.div`
    width: 2.688rem;
    height: 0.875rem;
    font-family: Roboto;
    font-size: 0.75rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    text-align: center;
    color: #e02020;
`

export const Quantidade = styled.div`
    width: 2.063rem;
    height: 2.063rem;
    margin: 0 0 0.688rem 0.2rem /*1rem*/;
    padding: 0.438rem 0.75rem;
    border-radius: 8px;
    border: solid 1px #e8222e;
`

export const Numero = styled.div`
    width: 0.563rem;
    height: 1.188rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #e8222e;
`

export const DivFuncionalidades = styled.div`
    display: flex;
    flex-direction: column;
`

export const Frete = styled.div`
    width: 6.5rem;
    height: 1.125rem;
    margin: 1rem 1rem 0.813rem 3.75rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: right;
    color: var(--black);
`

export const PrecoSubtotal = styled.div`
    width: /*10.25rem*/100%;
    height: 1.313rem;
    margin: 0.813rem 1rem 1.5rem 0;
    font-family: Roboto;
    font-size: 1.125rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.43px;
    text-align: right;
    color: #e8222e;
` 

export const Subtotal =styled.div`
    width: /*10.25rem*/100%;
    height: 1.125rem;
    margin: 0.938rem 0 1.563rem 1rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--black);
`

export const DivPrecos = styled.div`
    display:flex; 
`

export const FormaPagamento = styled.div`
    width: 90%/*20.5rem*/;
    height: 1.125rem;
    margin: 1.5rem 1rem 0.5rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--black);
` 

export const OpcaoPagamento = styled.div`
    width: 18.5rem;
    height: 1.125rem;
    margin: 0.688rem 1rem 0.688rem 0.5rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--black);
`

export const RadiobuttonUnchecked = styled.button`
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.5rem 0.5rem 0.5rem 1rem;
    object-fit: contain;
`

export const RadiobuttonChecked = styled.button`
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.5rem 0.5rem 1rem 1rem;
    object-fit: contain;
`

export const Fill = styled.div`
    width: 0.625rem;
    height: 0.625rem;
    background-color: var(--black);
`

export const DivBotaoConfirma = styled.div`
    width: 100%/*20.5rem*/;
    height: 2.625rem;
    padding: 0.75rem 1rem;
    border-radius: 2px;
    background-color: #e8222e;
    margin-top: 2rem; //acrescentei
`

export const BotaoConfirma=styled.button`
    width: 100%/*18.5rem*/;
    height: 1.125rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: var(--black);
    background-color: #e8222e;
    border: none;
` 
  
  
  
  
  
  
  


  
  
  
  

  
  
  
  
  

  

