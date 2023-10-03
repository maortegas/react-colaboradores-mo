import Table from 'react-bootstrap/Table';

const Listado = ({ colaboradores }) => {
    
  return (
    <>
      <h1>Listado de Colaborador</h1>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
         {colaboradores.map((colaborador, index) => (
                     <tr key={colaborador.id}>
                     <td>{colaborador.id}</td>
                     <td>{colaborador.nombre}</td>
                     <td>{colaborador.correo}</td>
                     <td>{colaborador.edad}</td>
                     <td>{colaborador.cargo}</td>
                     <td>{colaborador.telefono}</td>
                   </tr>
     ))}
           </tbody>
    </Table>
         
    </>
  );
}

export default Listado;
