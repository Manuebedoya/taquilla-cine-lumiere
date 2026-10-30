import { peliculas } from "./peliculas.js";
import { venderEntradas, calcularTotalIngresos } from "./taquillaRules.js";

console.log("==========================================");
console.log("🎬 CINE LUMIÈRE - CARTELERA INICIAL 🎬");
console.log("==========================================");
console.table(peliculas);

console.log("\n--- SIMULACIÓN DE VENTAS DE TAQUILLA ---");

// 1. Venta exitosa
venderEntradas(1, 5);

// 2. Intento de sobreventa
venderEntradas(2, 10);