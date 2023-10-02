import { useState } from "react";


const Buscador = ({colaboradores, setBuscador, setBuscadorFlag}) => {
    const [search, setSearch]= useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        let buscar='';
  
        const filteredCol= colaboradores.filter ((colaborador) => {

            buscar= colaborador.nombre.toUpperCase( ) 
                + colaborador.correo.toUpperCase( ) 
                + colaborador.edad.toUpperCase( )
                + colaborador.cargo.toUpperCase( )
                + colaborador.telefono.toUpperCase( );

            if (buscar.toUpperCase( ).includes (search.toUpperCase( ))) {
                setBuscadorFlag(false);
                return true;
            }

        })
        if (search==''){
            setBuscadorFlag(true);
        }
        setBuscador(filteredCol);
    }
    return (
      <div>
            <form onSubmit={handleSubmit} >
                <label htmlFor="">Nombre</label>
                <input type="text" name="name" onChange={(e) => setSearch(e.target.value)} value={search} />
                <button>Buscar</button>
            </form>
      </div>
    )
  }
  
  export default Buscador