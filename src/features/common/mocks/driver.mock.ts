import { mockVehicle } from "@features/account/mocks";
import { User } from "../types";

export const mockDriver: User = {
  uid: "drv_67890",
  picture: "https://randomuser.me/api/portraits/women/44.jpg",
  created_at: new Date("2022-11-20"),
  phone_number: "+15559876543",
  full_name: "Sarah Driver",
  vehicle: mockVehicle,
};
