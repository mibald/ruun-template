import { User } from "../types";

export const mockClient: User = {
  uid: "usr_12345",
  picture: "https://randomuser.me/api/portraits/men/32.jpg",
  created_at: new Date("2023-01-15"),
  email: "client@example.com",
  phone_number: "+15551234567",
  full_name: "John Client",
};
