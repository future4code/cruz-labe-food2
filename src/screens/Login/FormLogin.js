import React, {useState} from 'react';
import {useForm} from '../../hooks/useForm';
import {Input, Label, IconPassword} from '../../GlobalStyle';
import { ReactComponent as Senha } from '../../assets/senha.svg';
import { ReactComponent as Senha2 } from '../../assets/senha-2.svg';

const FormLogin = () =>  {
  const [form, onChange, resetForm] = useForm({email: '', password: ''});
  const [showPassword, setShowPassword] = useState(false)

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleClick}>
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
          Senha
          <Input
          type={showPassword ? 'text' : 'password'}
          placeholder='Mínimo 6 caracteres'
          name='password'
          onChange='onChange'
          required
          
          >
          
          </Input>
          <IconPassword>
          {showPassword ? 
          <Senha2 onClick={() => setShowPassword(!showPassword)}/>
           : 
          <Senha onClick={() => setShowPassword(!showPassword)}/>}
          </IconPassword>
         
        </Label>
       
      
      </form>
      
    </div>
  )
}

export default FormLogin;