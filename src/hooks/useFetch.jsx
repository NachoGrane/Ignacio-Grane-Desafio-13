import { useEffect, useState } from "react";
//                      de esta forma, si no me pasan nada es un objeto vacío
const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);

  //Para que se ejecute peticion cuando tenemos url y options.
  useEffect(() => {
    peticionAsincronica();
  }, []);

  const peticionAsincronica = async () => {
    try {
      const res = await fetch(url, options);
      if (!res.ok)
        throw new Error("No se pudo concretar la petición", res.status);
      const resultado = await res.json();
      setData(resultado);
    } catch (error) {
      console.error("[peticionAsincronica]", error);
    }
  };

  // --> tipos de datos objetos -> Array, objeto, funciones
  //return [];
  return { data, setData };
};

export default useFetch;
