import { VehicleClass } from "../type/vehicle-class.type";

export const colorsByVehicleClass = {
    [VehicleClass.ECONOMY]: {
        background: "bg-blue-500/10",
        text: "text-blue-600",
        border: "border-blue-600"
    },
    [VehicleClass.COMFORT]: {
        background: "bg-yellow-500/10",
        text: "text-yellow-600",
        border: "border-yellow-600"
    },
    [VehicleClass.PREMIUM]: {
        background: "bg-purple-500/10",
        text: "text-purple-600",
        border: "border-purple-600"
    },
    [VehicleClass.LUXURY]: {
        background: "bg-orange-500/10",
        text: "text-orange-600",
        border: "border-orange-600"
    },
    [VehicleClass.SUV]: {
        background: "bg-green-500/10",
        text: "text-green-600",
        border: "border-green-600"
    },
    [VehicleClass.VAN]: {
        background: "bg-emerald-500/10",
        text: "text-emerald-600",
        border: "border-emerald-600"
    },
    [VehicleClass.ELECTRIC]: {
        background: "bg-sky-500/10",
        text: "text-sky-600",
        border: "border-sky-600"
    }
} as const;