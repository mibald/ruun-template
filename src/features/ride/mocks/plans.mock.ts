import { VehicleType } from "@features/account/type/vehicle-type.type";
import { Plan } from "../types/plan";
import { VehicleClass } from "@features/account/type/vehicle-class.type";

export const plansMock: Plan[] = [
    {
        destinationEstimationTime: 10,
        destinationEstimationTimeUnit: 'M',
        originEstimationTime: 12,
        originEstimationTimeUnit: 'M',
        price: '6',
        priceUnit: 'USD',
        vehicleType: VehicleType.CAR,
        vehicleClass: VehicleClass.ECONOMY,
        available: false,
    },
    {
        destinationEstimationTime: 8,
        destinationEstimationTimeUnit: 'M',
        originEstimationTime: 5,
        originEstimationTimeUnit: 'M',
        price: '10',
        priceUnit: 'USD',
        vehicleType: VehicleType.CAR,
        vehicleClass: VehicleClass.COMFORT,
        available: true,
    },
    {
        destinationEstimationTime: 25,
        destinationEstimationTimeUnit: 'M',
        originEstimationTime: 10,
        originEstimationTimeUnit: 'M',
        price: '15',
        priceUnit: 'USD',
        vehicleType: VehicleType.CAR,
        vehicleClass: VehicleClass.LUXURY,
        available: true,
    },
];