import React, {useState} from 'react';
import {useForm} from '../../hooks/useForm';
import Input from '../../components/Input/Input'
import Form from '../../components/Form/Form'
import {useHistory} from 'react-router-dom'
import {login} from '../../services/API'
const FormLogin = () =>  {
  const [form, onChange, resetForm] = useForm({email: '', password: ''});

  const history = useHistory()
  const handleClick = (event) => {
    event.preventDefault();
    console.log(form)
    login(form, history)
  };

  return (
    <div>
     <Form 
      onSubmit={handleClick} 
      labelButton="Entrar" 
      title="Entrar">
      <Input
      label="Email"
      placeholder="email@email.com"
      value={form.email}
      onChange={onChange}
      type="email"
      name="email"
      error=""
      />
      <Input
      label="Senha"
      placeholder="Mínimo 6 caracteres"
      value={form.password}
      onChange={onChange}
      type="password"
      name="password"
      error=""
      />
      </Form>
      
    </div>
  )
}

export default FormLogin;