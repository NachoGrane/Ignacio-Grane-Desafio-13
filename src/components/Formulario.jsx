import { useContext, useEffect, useState } from "react";
import { notificacionSweetCheck } from "./Formulario.service";
import UsuariosContext from "../contexts/UsuariosContext";

const Formulario = () => {
  const { agregarUsuario, usuarioAEditar, setUsuarioAEditar, editarUsuario } =
    useContext(UsuariosContext);

  const formInicial = {
    id: null,
    nombre: "",
    apellido: "",
    edad: "",
    colorFavorito: "",
  };

  useEffect(() => {
    usuarioAEditar ? setForm(usuarioAEditar) : setForm(formInicial);
  }, [usuarioAEditar]);

  const [form, setForm] = useState(formInicial);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.id === null) {
      agregarUsuario(form);
      notificacionSweetCheck(form.nombre, "guardado");
    } else {
      editarUsuario(form);
      notificacionSweetCheck(form.nombre, "editado");
    }
    handleReset();
  };

  const handleReset = () => {
    setForm(formInicial);
    setUsuarioAEditar(null);
  };

  return (
    <>
      <h2 className="mt-3">
        Formulario de {usuarioAEditar ? "edición" : "creación"} de usuario
      </h2>
      <form
        className="w-75 border border-danger rounded-3 p-4"
        onSubmit={handleSubmit}
      >
        {/* Campo Nombre */}
        <div className="mb-3">
          <label htmlFor="lbl-nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="lbl-nombre"
            name="nombre"
            placeholder="Ingrese el nombre"
            value={form.nombre}
            onChange={handleChange}
          />
        </div>
        {/* Campo Apellido */}
        <div className="mb-3">
          <label htmlFor="lbl-apellido" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="lbl-apellido"
            name="apellido"
            placeholder="Ingrese el apellido"
            value={form.apellido}
            onChange={handleChange}
          />
        </div>
        {/* Campo edad */}
        <div className="mb-3">
          <label htmlFor="lbl-edad" className="form-label">
            Edad
          </label>
          <input
            type="text"
            className="form-control"
            id="lbl-edad"
            name="edad"
            placeholder="Ingrese el edad"
            value={form.edad}
            onChange={handleChange}
          />
        </div>
        {/* Campo colorFavorito */}
        <div className="mb-3">
          <label htmlFor="lbl-colorFavorito" className="form-label">
            Color Favorito
          </label>
          <input
            type="text"
            className="form-control"
            id="lbl-colorFavorito"
            name="colorFavorito"
            placeholder="Ingrese el color favorito"
            value={form.colorFavorito}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-dark me-2">
          {usuarioAEditar ? "Editar" : "Guardar"}
        </button>
        <button type="reset" className="btn btn-danger" onClick={handleReset}>
          Resetear
        </button>
      </form>
    </>
  );
};

export default Formulario;
