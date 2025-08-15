import { VehicleClass } from "@features/account/type/vehicle-class.type";
import { VehicleType } from "@features/account/type/vehicle-type.type";

export interface Plan {
  originEstimationTime: number;
  originEstimationTimeUnit: 'M' | 'H';

  destinationEstimationTime: number;
  destinationEstimationTimeUnit: 'M' | 'H';

  vehicleType: VehicleType;
  vehicleClass: VehicleClass;

  price: string;
  priceUnit: string;

  available: boolean;
}