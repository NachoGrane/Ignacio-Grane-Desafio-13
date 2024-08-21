import { useContext } from "react";
import { notificacionSweet } from "./TablaFila.service";
import UsuariosContext from "../contexts/UsuariosContext";

const TablaFila = ({ usuario }) => {
  const { setUsuarioAEditar, eliminarUsuario } = useContext(UsuariosContext);
  const handleEliminar = () => {
    notificacionSweet(usuario.nombre, () => {
      eliminarUsuario(usuario.id);
    });
  };

  const handleEditar = () => {
    setUsuarioAEditar(usuario);
  };

  return (
    <tr>
      <th scope="row">{usuario.nombre}</th>
      <td>{usuario.apellido}</td>
      <td>{usuario.edad}</td>
      <td>{usuario.colorFavorito}</td>
      <td>
        <button
          className="btn btn-warning me-2"
          onClick={() => handleEditar(usuario)}
        >
          Editar
        </button>
        <button className="btn btn-danger" onClick={handleEliminar}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default TablaFila;
