import React, {useState} from 'react';
import {useForm} from '../../hooks/useForm';
import {Input, Label,} from '../../GlobalStyle';

const FormRegisterAddress = () =>  {
  const [form, onChange, resetForm] = useForm({ street:'',  number: '', neighbourhood: '', city: '', state: '', complement: ','});
  
  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <Label>
          Logradouro
          <Input 
            type='text'
            placeholder='Rua / Av'
            name='street'
            onChange='onChange'
            required

          >
          </Input>
        </Label>

        <Label>
        Número
          <Input 
            type='number'
            placeholder='Número'
            name='number'
            onChange='onChange'
            required

          >
          </Input>
        </Label>

        <Label>
          Complemento
          <Input
          type='text'
          placeholder='Apto./ Bloco'
          name='complement'
          onChange='onChange'
          min='14'
          required
          />
        </Label>

        <Label>
          Bairro
          <Input
          type='text'
          placeholder='Bairro'
          name='neighbourhood'
          onChange='onChange'
          required
          
          >
          </Input>
         
        </Label>

        <Label>
          Cidade 
          <Input
          type='text'
          placeholder='Cidade'
          name='city'
          onChange='onChange'
          required
          
          >
          </Input>
        </Label>

        <Label>
          Estado 
          <Input
          type='text'
          placeholder='Estado'
          name='state'
          onChange='onChange'
          required
          
          >
          </Input>
        </Label>

        
        
      </form>
      
    </div>
  )
}

export default FormRegisterAddress;