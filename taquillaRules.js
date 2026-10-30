import { peliculas } from "./peliculas.js";

export function venderEntradas(peliculaId, cantidad) {
  const pelicula = peliculas.find((p) => p.id === peliculaId);

  if (!pelicula) {
    console.log(`❌ ERROR: La película con ID ${peliculaId} no existe.`);
    return false;
  }

  const asientosDisponibles = pelicula.capacidadMaxima - pelicula.entradasVendidas;

  if (cantidad > asientosDisponibles) {
    console.log(
      `❌ VENTA RECHAZADA [${pelicula.titulo}]: Solicitaste ${cantidad} entradas, pero solo quedan ${asientosDisponibles} asientos disponibles.`
    );
    return false;
  }

  pelicula.entradasVendidas += cantidad;
  console.log(
    `✅ VENTA EXITOSA: Se vendieron ${cantidad} entradas para "${pelicula.titulo}".`
  );
  return true;
}