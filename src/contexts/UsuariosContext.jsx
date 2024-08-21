import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { peticionesHttp } from "../helpers/peticiones-http";

// ! CREANDO CONTEXTO

// ! 1. Creamos el contexto

const UsuariosContext = createContext();

// ! 2. Armamos el provider
const UsuariosProvider = ({ children }) => {
  const url = import.meta.env.VITE_API_USERS;

  //    ahora en Usuarios tengo la data
  const { data: users, setData: setUsers } = useFetch(url);
  const [usuarioAEditar, setUsuarioAEditar] = useState(null);

  const agregarUsuario = async (usuario) => {
    try {
      /* 1. Hacer la petición para el guardado del Usuario en el backend */

      const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(usuario),
      };

      const dataNuevoUsuario = peticionesHttp(url, options);

      console.log(dataNuevoUsuario); // nuevo id

      /* 2. Cambiar el estado de react para que vuelve a renderizar y pueder la creación del Usuario. */
      const nuevoEstadoUsuarios = [...users, dataNuevoUsuario];
      setUsers(nuevoEstadoUsuarios);
    } catch (error) {
      console.error("[agregarUsuario]", error);
    }
  };

  const editarUsuario = async (usuarioEditado) => {
    try {
      // 1. Petición asincrónica para actualizar el backend con el Usuario nuevo
      const urlEdicion = url + usuarioEditado.id;
      const options = {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(usuarioEditado),
      };
      const dataEditado = await peticionesHttp(urlEdicion, options);
      console.log(dataEditado);

      // 2. Actualizo el estado basado en el Usuario editado que me llega del backend

      const nuevoEstadoUsuarios = users.map((user) =>
        user.id === usuarioEditado.id // condición
          ? usuarioEditado
          : user
      );

      setUsers(nuevoEstadoUsuarios);
    } catch (error) {
      console.error("[editarUsuario]", error);
    }
  };

  const eliminarUsuario = async (id) => {
    // console.log(id)
    try {
      // 1. Petición asincronica para borrar un Usuario

      const urlEliminacion = url + id; // http://loca.../users/{id}

      const options = {
        method: "DELETE",
      };

      const dataEliminado = await peticionesHttp(urlEliminacion, options);

      const data = {
        id: id,
        Usuario: dataEliminado,
      };

      // 2. Modificar el estado users de react para eliminar el Usuario con el id recibdo

      const nuevoEstadoUsuarios = users.filter((user) => user.id !== data.id);
      setUsers(nuevoEstadoUsuarios);
    } catch (error) {}
  };

  const data = {
    users,
    usuarioAEditar,
    setUsuarioAEditar,
    eliminarUsuario,
    editarUsuario,
    agregarUsuario,
  };

  //Para que esto se pueda compartir. Tiene una prop y tiene la capacidad de devolver algo adentro.
  return (
    <UsuariosContext.Provider value={data}>{children}</UsuariosContext.Provider>
  );
};
// ! 3. Exportaciones

export { UsuariosProvider };
export default UsuariosContext;
