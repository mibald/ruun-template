import { Coords } from "./coords.type";
import { RideStatus } from "./ride-status.enum";

export interface RideRegistry {
    id: string;
    uid: string;
    ride_id: string;
    created_at: Date;
    status: RideStatus
    user_coords?: Coords,
}