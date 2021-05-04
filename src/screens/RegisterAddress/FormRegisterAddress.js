import React, {useState} from 'react';
import {useForm} from '../../hooks/useForm';
import Input from '../../components/Input/Input'
import Form from '../../components/Form/Form'

import {useHistory} from 'react-router-dom'
import {addAdress} from '../../services/API'
const FormRegisterAddress = () =>  {
  const [form, onChange, resetForm] = useForm({ street:'',  number: '', neighbourhood: '', city: '', state: '', complement: ','});
  
  const history = useHistory()
  const handleClick = (event) => {
    event.preventDefault();
    console.log(form)
    addAdress(form, history)
  };

  return (
    <div>
      <Form 
      onSubmit={handleClick}
      labelButton="Salvar" 
      title="Meu endereço">
      
             <Input
      label="Logradouro"
      placeholder="Rua / Av"
      value={form.street}
      onChange={onChange}
      type="text"
      name="street"
      error=""
      required={true}
      />
       <Input
      label="Número"
      placeholder="Número"
      value={form.number}
      onChange={onChange}
      type="number"
      name="number"
      error=""
      required={true}
      />
        <Input
      label="Complemento"
      placeholder="Apto./ Bloco"
      value={form.complement}
      onChange={onChange}
      type="text"
      name="complement"
      error=""
      required={false}
      />
         <Input
      label="Bairro"
      placeholder="Bairro"
      value={form.neighbourhood}
      onChange={onChange}
      type="text"
      name="neighbourhood"
      error=""
      required={true}
      />
             <Input
      label="Cidade"
      placeholder="Cidade"
      value={form.city}
      onChange={onChange}
      type="text"
      name="city"
      error=""
      required={true}
      />

<Input
      label="Estado"
      placeholder="Estado"
      value={form.state}
      onChange={onChange}
      type="text"
      name="state"
      error=""
      required={true}
      />       
        
      </Form>
      
    </div>
  )
}

export default FormRegisterAddress;