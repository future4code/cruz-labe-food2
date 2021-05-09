import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import { signup } from "../../services/API";
import { useHistory } from "react-router-dom";
import validateCPF from "../../constants/validateCPF";
import validateEmail from "../../constants/validateEmail";
import maskCPF from "../../constants/maskCPF";
import Snackbar from "../../components/Snakbar/Snakbar";
import { LinearProgressGlobal } from "../../GlobalStyle";

const FormRegister = () => {
  const [form, onChange, resetForm] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});
  const [snack, setSnack] = useState({ text: "", sucess: false });
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const handleClick = (event) => {
    event.preventDefault();
    setError({});
    const currentError = {};

    if (form.name === "") {
      currentError.name = "Nome não foi inserido";
    }

    if (form.email === "") {
      currentError.email = "E-mail não foi inserido";
    } else if (!validateEmail(form.email)) {
      currentError.email = "E-mail inválido";
    }

    if (form.cpf === "") {
      currentError.cpf = "CPF não foi inserido";
    } else if (!validateCPF(form.cpf)) {
      currentError.cpf = "CPF informado é inválido";
    }

    if (form.password === "") {
      currentError.password = "Senha não foi inserida";
    } else if (form.password.length < 6) {
      currentError.password = "Senha precisa ter no mínimo 6 caracteres";
    } else {
      if (form.password != form.confirmPassword) {
        currentError.confirmPassword = "As senhas precisam ser iguais";
      }
    }
    setError({ ...currentError });

    if (Object.keys(currentError).length === 0) {
      const body = { ...form };
      delete body.confirmPassword;
      signup(body, history, setSnack, setLoading);
    }
  };

  return (
    <div>
      <Form onSubmit={handleClick} labelButton="Criar" title="Cadastrar">
        <Input
          label="Nome"
          placeholder="Nome e Sobrenome"
          value={form.name}
          onChange={onChange}
          type="text"
          name="name"
          error={error["name"]}
          required={true}
        />
        <Input
          label="Email"
          placeholder="email@email.com"
          value={form.email}
          onChange={onChange}
          type="email"
          name="email"
          error={error["email"]}
          required={true}
        />
        <Input
          label="CPF"
          placeholder="000.000.000-00"
          value={form.cpf}
          onChange={(e) => onChange(e, maskCPF)}
          type="text"
          name="cpf"
          error={error["cpf"]}
          required={true}
        />
        <Input
          label="Senha"
          placeholder="Mínimo 6 caracteres"
          value={form.password}
          onChange={onChange}
          type="password"
          name="password"
          error={error["password"]}
          required={true}
        />
        <Input
          label="Confirmar"
          placeholder="Confirme a senha anterior"
          value={form.confirmPassword}
          onChange={onChange}
          type="password"
          name="confirmPassword"
          error={error["confirmPassword"]}
          required={true}
        />
        {loading && <LinearProgressGlobal />}
      </Form>
      {snack.text && <Snackbar text={snack.text} sucess={snack.sucess} />}
    </div>
  );
};

export default FormRegister;
