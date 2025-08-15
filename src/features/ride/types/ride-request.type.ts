import { User } from "@features/common/types";
import { Location } from "./location.type";
import { PricingInfo } from "./pricing-info.type";

export interface RideRequest {
    client: User;
    origin: Location;
    destination: Location;
    pricing: PricingInfo;
}