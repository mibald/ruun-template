import { User } from "@features/common/types";
import { RideRegistry } from "./ride-registry.type";
import { Location } from "./location.type";
import { Vehicle } from "@features/account/type/vehicle.type";
import { PricingInfo } from "./pricing-info.type";
import { DistancesInfo } from "./distances-info.type";

export interface Ride {
    id: string;
    created_at: Date;
    client: User;
    driver: User;
    origin: Location;
    destination: Location;
    registries: RideRegistry[];
    vehicle: Vehicle;
    pricing: PricingInfo;
    distances: DistancesInfo;
};