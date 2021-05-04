import React, {useState} from 'react';
import {useForm} from '../../hooks/useForm';
import Form from '../../components/Form/Form'
import Input from '../../components/Input/Input'
import {signup} from '../../services/API'
import {useHistory} from 'react-router-dom'
const FormRegister = () =>  {
  const [form, onChange, resetForm] = useForm({ name:'',  email: '', cpf:'', password: '', confirmPassword: '',});

  const history = useHistory()
  const handleClick = (event) => {
    event.preventDefault();
    const body = {...form}
    delete body.confirmPassword;
    console.log(body)
    signup(body, history)
  };

  return (
    <div>
      <Form 
      onSubmit={handleClick} 
      labelButton="Criar" 
      title="Cadastrar">
      <Input
      label="Nome"
      placeholder='Nome e Sobrenome'
      value={form.name}
      onChange={onChange}
      type="text"
      name="name"
      error=""
      required={true}
      />
        <Input
      label="Email"
      placeholder='email@email.com'
      value={form.email}
      onChange={onChange}
      type="email"
      name="email"
      error=""
      required={true}
      />
         <Input
      label="CPF"
      placeholder='000.000.000-00'
      value={form.cpf}
      onChange={onChange}
      type="text"
      name="cpf"
      error=""
      required={true}
      />
        <Input
      label="Senha"
      placeholder='Mínimo 6 caracteres'
      value={form.password}
      onChange={onChange}
      type="password"
      name="password"
      error=""
      required={true}
      />
    <Input
      label="Confirmar"
      placeholder='Confirme a senha anterior'
      value={form.confirmPassword}
      onChange={onChange}
      type="password"
      name="confirmPassword"
      error=""
      required={true}
      />
      </Form>
      
    </div>
  )
}

export default FormRegister;