import { Location } from "../types/location.type";

const coords: Location["coords"] = { latitude: 0, longitude: 0 };

export const locationsMock: Location[] = [
  {
    coords,
    name: "Iglesia la morera",
    description: "Iglesia principal de la morera, calle 14 de marzo."
  },
  {
    coords,
    name: "Calle Principal Avenida bolivar",
    description: "Avenida principal de San juan de los Morros.",
  },
  {
    coords,
    name: "Banco Obrero",
    description: "Zona norte de San juan de los Morros."
  },
  {
    coords,
    name: "Villa Olimpica",
    description: "Zona norte de San juan de los Morros."
  },
  {
    coords,
    name: "Luxor",
    description: "Super mercado nacional Luxor C.A"
  },
];
