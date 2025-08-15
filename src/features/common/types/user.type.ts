import { Vehicle } from "@features/account/type/vehicle.type";

export interface User {
    uid: string;
    picture: string;
    created_at: Date;
    email?: string;
    phone_number?: string;
    full_name: string;
    vehicle?: Vehicle
}