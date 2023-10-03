import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const Formulario = ({colaboradores, setColaboradores, setAlert }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");

  const asignaID=(arreglo)=>{
    let id=1
    let paso=[...arreglo]
    if (paso.length>0){
        const ordenado = paso.sort((x,y) => y.id - x.id)  ;
        id= Number(ordenado[0].id) + 1;
    }
    return id
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === "") {
      setAlert({
        msg: "Debe de ingresar un nombre!",
        color: "danger",
      });
      return;
    }
    if (correo === "") {
      setAlert({
        msg: "Debe de ingresar un email !",
        color: "danger",
      });
      return;
    }
    if (edad === "") {
      setAlert({
        msg: "Debe de ingresar una contraseña !",
        color: "danger",
      });
      return;
    }
    if (cargo === "") {
      setAlert({
        msg: "Debe de ingresar una confirmación de contraseña !",
        color: "danger",
      });
      return;
    }
    if (telefono === "") {
        setAlert({
          msg: "Debe de ingresar una confirmación de contraseña !",
          color: "danger",
        });
        return;
      }


    setAlert({
      msg: "Ingreso satisfactorio !",
      color: "success",
    });
    const id= asignaID(colaboradores)
    const colaborador = { id, nombre, correo, edad, cargo, telefono };
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <Form className="w-100 " onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="email"
          placeholder="name@example.com"
          onChange={(e) => setCorreo(e.target.value)}
          value={correo}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="number"
          placeholder="Edad"
          onChange={(e) => setEdad(e.target.value)}
          value={edad}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Cargo"
          onChange={(e) => setCargo(e.target.value)}
          value={cargo}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Teléfono"
          onChange={(e) => setTelefono(e.target.value)}
          value={telefono}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Button
          className="w-100"
          as="input"
          type="submit"
          value="Registrarse"
        />
      </Form.Group>
    </Form>
  );
};


export default Formulario;
