import { ImageRequireSource } from "react-native";
import { assets } from "@core/const";
import { VehicleClass } from "@features/account/type/vehicle-class.type";

export const carImages: Record<VehicleClass, ImageRequireSource> = {
    [VehicleClass.ECONOMY]: assets.CARS.ECONOMY,
    [VehicleClass.COMFORT]: assets.CARS.COMFORT,
    [VehicleClass.PREMIUM]: assets.CARS.PREMIUM,
    [VehicleClass.LUXURY]: assets.CARS.PREMIUM,
    [VehicleClass.SUV]: assets.CARS.PREMIUM,
    [VehicleClass.VAN]: assets.CARS.PREMIUM,
    [VehicleClass.ELECTRIC]: assets.CARS.PREMIUM
}