import React, {useState} from 'react';
import {useForm} from '../../hooks/useForm';
import Input from '../../components/Input/Input'
import Form from '../../components/Form/Form'
import {useHistory} from 'react-router-dom'
import {login} from '../../services/API'
const FormLogin = () =>  {
  const [form, onChange, resetForm] = useForm({email: '', password: ''});
  const [error, setError] = useState({})
 
  const history = useHistory()
  const handleClick = (event) => {
    event.preventDefault();
    // console.log(form)
    setError({})
    const currentError = {}
     
    if(form.email === ""){
      currentError.email = "E-mail não foi inserido"
    }
    if(form.password === ""){
      currentError.password = "Senha não foi informada";
    }
    else if(form.password.length < 6){
      currentError.password = "Senha precisa ter mais que 6 caracteres";
    }
    setError({...currentError})
    
    if(Object.keys(currentError).length === 0){
      login(form, history)
    }
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
      required={true}
      error={error['email']}
      />
      <Input
      label="Senha"
      placeholder="Mínimo 6 caracteres"
      value={form.password}
      onChange={onChange}
      type="password"
      name="password"
      required={true}
      error={error['password']}
      />
      </Form>
      
    </div>
  )
}

export default FormLogin;