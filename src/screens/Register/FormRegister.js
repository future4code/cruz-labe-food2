import React, {useState} from 'react';
import {useForm} from '../../hooks/useForm';
import {Input, Label, IconPassword} from '../../GlobalStyle';
import { ReactComponent as Senha } from '../../assets/senha.svg';
import { ReactComponent as Senha2 } from '../../assets/senha-2.svg';

const FormRegister = () =>  {
  const [form, onChange, resetForm] = useForm({ name:'',  email: '', cpf:'', password: '', confirmPassword: '',});
  const [showPassword, setShowPassword] = useState([false, false])
  
  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <Label>
          Nome
          <Input 
            type='text'
            placeholder='Nome e Sobrenome'
            name='nome'
            onChange='onChange'
            required

          >
          </Input>
        </Label>

        <Label>
        Email
          <Input 
            type='email'
            placeholder='email@email.com'
            name='email'
            onChange='onChange'
            required

          >
          </Input>
        </Label>

        <Label>
          CPF
          <Input
          type='number'
          placeholder='000.000.000-00'
          name='cpf'
          onChange='onChange'
          min='14'
          required
          />
        </Label>

        <Label>
          Senha
          <Input
          type={showPassword[0] ? 'text' : 'password'}
          placeholder='Mínimo 6 caracteres'
          name='password'
          onChange='onChange'
          required
          
          >
          
          </Input>
          <IconPassword>
          {showPassword[0] ? 
          <Senha2 onClick={() => setShowPassword([!showPassword[0], showPassword[1]])}/> 
          : 
          <Senha onClick={() => setShowPassword([!showPassword[0], showPassword[1]])}/>}

          </IconPassword>
         
        </Label>

        <Label>
          Confirmar 
          <Input
          type={showPassword[1] ? 'text' : 'password'}
          placeholder='Confirme a senha anterior'
          name='password'
          onChange='onChange'
          required
          
          >
          
          </Input>
          <IconPassword>
          {showPassword[1] ? 
          <Senha2 onClick={() => setShowPassword([showPassword[0], !showPassword[1]])}/> 
          : 
          <Senha onClick={() => setShowPassword([showPassword[0], !showPassword[1]])}/>}
          </IconPassword>
         
        </Label>
        
      </form>
      
    </div>
  )
}

export default FormRegister;