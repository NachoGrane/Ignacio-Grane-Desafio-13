import { useContext } from "react";
import UsuariosContext from "../contexts/UsuariosContext";
import TablaFila from "./TablaFila";

const Tabla = ({}) => {
  const { users } = useContext(UsuariosContext);
  return (
    <>
      <div className="mb-4">
        <h2 className="mt-3">Tabla de Usuarios</h2>
        <hr />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Edad</th>
              <th>Color Favorito</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, idx) => <TablaFila key={idx} usuario={user} />)}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tabla;
