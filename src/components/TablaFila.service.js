import Swal from "sweetalert2";

export const notificacionSweet = (nombre, cb) => {
  Swal.fire({
    title: `¿Estás seguro de eliminar el usuario con el nombre: ${nombre}?`,
    text: "No vas a poder volver atrás esta acción.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminalo!",
    cancelButtonText: "No mi shei",
  }).then((result) => {
    if (result.isConfirmed) {
      cb();
      Swal.fire({
        title: "Eliminado!",
        text: "Se ha eliminado con éxito.",
        icon: "success",
      });
    }
  });
};
