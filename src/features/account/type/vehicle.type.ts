import { VehicleClass } from "./vehicle-class.type";
import { VehicleType } from "./vehicle-type.type";

export interface Vehicle {
  id: string;
  model: string;
  year: number;
  created_at: Date;
  type: VehicleType;
  classes: VehicleClass[];
  picture: string;
  // New fields
  licensePlate: string;
  color: string;
  status: "APPROVED" | "PENDING" | "REJECTED";
  insuranceExpiry: Date;
  isActive: boolean;
  documents: {
    registration: { url: string; expiry: Date };
    insurance: { url: string; expiry: Date };
  };
  metrics?: {
    tripsCompleted: number;
    avgRating: number;
  };
}