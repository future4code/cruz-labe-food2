import React, { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import Input from "../../components/Input/Input";
import Form from "../../components/Form/Form";
import { useHistory } from "react-router-dom";
import { updateAddress } from "../../services/API";
import { useRequestData } from "../../hooks/useRequestData";
import Snackbar from "../../components/Snakbar/Snakbar";
import { LinearProgressGlobal } from "../../GlobalStyle";

const FormEditAddressPage = () => {
  const [form, onChange, resetForm] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });
  const [error, setError] = useState({});
  const [address, setAddress] = useRequestData("profile/address", {});
  const [snack, setSnack] = useState({ text: "", sucess: false });
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(address).length > 0) {
      resetForm(address.address);
    }
  }, [address]);

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
      updateAddress(form, history, setSnack, setLoading);
    }
  };

  return (
    <div>
      <Form onSubmit={handleClick} labelButton="Salvar">
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
        {loading && <LinearProgressGlobal />}
      </Form>
      {snack.text && <Snackbar text={snack.text} sucess={snack.sucess} />}
    </div>
  );
};

export default FormEditAddressPage;
