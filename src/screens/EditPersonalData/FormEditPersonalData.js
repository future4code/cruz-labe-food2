import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import { updateProfile } from "../../services/API";
import { useHistory } from "react-router-dom";
import validateCPF from "../../constants/validateCPF";

const FormEditPersonalData = () => {
  const [form, onChange, resetForm] = useForm({
    name: "",
    email: "",
    cpf: ""
  });
  const [error, setError] = useState({});

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
    }

    if (form.cpf === "") {
      currentError.cpf = "CPF não foi infomado";
    } else if (!validateCPF(form.cpf)) {
      currentError.cpf = "CPF informado é inválido";
    }
    setError({ ...currentError });

    if (Object.keys(currentError).length === 0) {
      updateProfile(form, history);
    }
  };

  return (
    <div>
      <Form onSubmit={handleClick} labelButton="Salvar" >
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
          onChange={onChange}
          type="text"
          name="cpf"
          error={error["cpf"]}
          required={true}
        />
      </Form>
    </div>
  );
};

export default FormEditPersonalData;
