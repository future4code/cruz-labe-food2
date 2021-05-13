import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import Input from "../../components/Input/Input";
import Form from "../../components/Form/Form";
import { useHistory } from "react-router-dom";
import { addAddress } from "../../services/API";
import Snackbar from "../../components/Snakbar/Snakbar";
import { LinearProgressGlobal } from "../../GlobalStyle";

const FormRegisterAddress = () => {
  const [form, onChange, resetForm] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const [error, setError] = useState({});
  const history = useHistory();
  const [snack, setSnack] = useState({ text: "", sucess: false });
  const [loading, setLoading] = useState(false);
  const handleClick = (event) => {
    event.preventDefault();
    const currentError = {};
    if (form.street === "") {
      currentError.street = "Logradouro não foi inserido";
    }
    if (form.number === "") {
      currentError.number = "Número não foi inserido";
    } else if (form.number < 0) {
      currentError.number = "Número não pode ser negativo";
    } else if (!Number.isInteger(Number(form.number))) {
      currentError.number = "Número não pode ser decimal";
    }
    if (form.neighbourhood === "") {
      currentError.neighbourhood = "Bairro não foi inserido";
    }
    if (form.city === "") {
      currentError.city = "Cidade não foi inserida";
    }
    if (form.state === "") {
      currentError.state = "Estado não foi inserido";
    }
    setError({ ...currentError });
    if (Object.keys(currentError).length === 0) {
      addAddress(form, history, setSnack, setLoading);
    }
  };

  return (
    <div>
      <Form onSubmit={handleClick} labelButton="Salvar" title="Meu endereço">
        <Input
          label="Logradouro"
          placeholder="Rua / Av"
          value={form.street}
          onChange={onChange}
          type="text"
          name="street"
          error={error["street"]}
          required={true}
        />
        <Input
          label="Número"
          placeholder="Número"
          value={form.number}
          onChange={onChange}
          type="number"
          name="number"
          error={error["number"]}
          required={true}
        />
        <Input
          label="Complemento"
          placeholder="Apto./ Bloco"
          value={form.complement}
          onChange={onChange}
          type="text"
          name="complement"
          required={false}
        />
        <Input
          label="Bairro"
          placeholder="Bairro"
          value={form.neighbourhood}
          onChange={onChange}
          type="text"
          name="neighbourhood"
          error={error["neighbourhood"]}
          required={true}
        />
        <Input
          label="Cidade"
          placeholder="Cidade"
          value={form.city}
          onChange={onChange}
          type="text"
          name="city"
          error={error["city"]}
          required={true}
        />

        <Input
          label="Estado"
          placeholder="Estado"
          value={form.state}
          onChange={onChange}
          type="text"
          name="state"
          error={error["state"]}
          required={true}
        />
        {snack.text && <Snackbar text={snack.text} sucess={snack.sucess} />}
        {loading && <LinearProgressGlobal />}
      </Form>
    </div>
  );
};

export default FormRegisterAddress;
