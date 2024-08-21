import Swal from "sweetalert2";

export const notificacionSweetCheck = (nombre, string, cb) => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: `El usuario ha sido ${string} con éxito`,
    showConfirmButton: false,
    timer: 1500,
  });
};
