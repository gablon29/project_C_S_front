import React, { useState } from "react";
import { Card, TextInput, Title, Badge, Button } from "@tremor/react";
import data from "../../../data/data.json";
import { validation } from "../../hook/validationForm";
const CreateUsers = () => {
  const [result, setResult] = useState(null);
  const [dataName, setDataName] = useState(
    Array.from(new Set(data.map((elemt) => elemt.name)))
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    setResult(null);
    const form = event.target;
    const formData = new FormData(form);
    const name = formData.get("name");
    const predica = formData.get("predica");
    const fecha = formData.get("fecha");
    const amount = formData.get("amount");
    validation(name, predica, fecha, amount, setResult);
    form.reset();
  };

  return (
    <Card style={{ margin: "16px" }}>
      <Title>Create a new Row</Title>
      <form onSubmit={handleSubmit} className="">
        <select name="name">
          <option>Pastores</option>
          {dataName.map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>
        <TextInput
          style={{ marginBottom: "5px" }}
          name="predica"
          placeholder="Tema de la predica"
        />
        <TextInput
          style={{ marginBottom: "5px" }}
          name="fecha"
          placeholder="Fecha del culto"
        />
        <TextInput
          style={{ marginBottom: "5px" }}
          name="amount"
          placeholder="Monto recaudado"
        />
        <div>
          <Button type="submit" style={{ marginTop: "16px" }}>
            Create new Row
          </Button>
          <span>
            {result === "ok" && <Badge color="green">Operacion Exitosa</Badge>}
            {result === "ko" && (
              <Badge color="red">Ups! Completa todas las casillas</Badge>
            )}
          </span>
        </div>
      </form>
    </Card>
  );
};

export default CreateUsers;
