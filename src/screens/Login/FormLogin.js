import React, {useState} from 'react';
import {useForm} from '../../hooks/useForm';
import {Input, Label, IconPassword, FormControl, DivInput, MsgError, DivFormControl, Form} from '../../GlobalStyle';
import { ReactComponent as Senha } from '../../assets/senha.svg';
import { ReactComponent as Senha2 } from '../../assets/senha-2.svg';
import InputTeste from '../../components/Input/Input'
const FormLogin = () =>  {
  const [form, onChange, resetForm] = useForm({email: '', password: ''});
  const [showPassword, setShowPassword] = useState(false)

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Form onSubmit={handleClick}>
      <DivFormControl>
            <FormControl className="">
          <DivInput>
          <Input 
            type='email'
            placeholder='email@email.com'
            name='email'
            onChange='onChange'
            required
            id="email"

         />
          </DivInput> 
          <Label for="email">
            Email
        </Label>
       
        </FormControl>

        </DivFormControl>
<DivFormControl>
        <FormControl>
          <DivInput>
            <Input
          type={showPassword ? 'text' : 'password'}
          placeholder='Mínimo 6 caracteres'
          name='password'
          onChange='onChange'
          required
          id="password"
          />
            <IconPassword>
          {showPassword ? 
          <Senha2 onClick={() => setShowPassword(!showPassword)}/>
           : 
          <Senha onClick={() => setShowPassword(!showPassword)}/>}
          </IconPassword>
        </DivInput>
        <Label for="password">
          Senha
        </Label>
        </FormControl>
</DivFormControl>
      <InputTeste
      label="Senha"
      placeholder="Mínimo 6 caracteres"
      value={form.password}
      onChange={onChange}
      type="password"
      name="password"
      error="asdas"
      />
      </Form>
      
    </div>
  )
}

export default FormLogin;