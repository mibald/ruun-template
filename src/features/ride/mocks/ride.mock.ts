import { User } from "@features/common/types";
import { Ride } from "../types/ride.type";
import { mockDriver } from "@features/common/mocks/driver.mock";
import { Location } from "../types/location.type";
import { RideRegistry } from "../types/ride-registry.type";
import { RideStatus } from "../types/ride-status.enum";
import { mockVehicle } from "@features/account/mocks";
import { pricingInfoMock } from "./pricing-info.mock";
import { distancesInfoMock } from "./distances-info.mock";

// Mock Users
const mockClient: User = {
  uid: "usr_12345",
  picture: "https://randomuser.me/api/portraits/men/32.jpg",
  created_at: new Date("2023-01-15"),
  email: "client@example.com",
  phone_number: "+15551234567",
  full_name: "John Client",
};

// Mock Locations
const mockOrigin: Location = {
  name: "Central Park",
  description: "Great Park",
  coords: {
    latitude: 40.7829,
    longitude: -73.9654,
  },
};

const mockDestination: Location = {
  name: "Empire State Building",
  description: "Great State",
  coords: {
    latitude: 40.7829,
    longitude: -73.9654,
  },
};

// Mock Ride Registries (status history)
const mockRegistries: RideRegistry[] = [
  {
    id: "reg_1",
    uid: mockClient.uid,
    ride_id: "ride_abc123",
    created_at: new Date("2023-05-20T10:00:00"),
    status: RideStatus.REQUESTED,
  },
  {
    id: "reg_2",
    uid: mockDriver.uid,
    ride_id: "ride_abc123",
    created_at: new Date("2023-05-20T10:02:30"),
    status: RideStatus.ACCEPTED,
  },
  {
    id: "reg_3",
    uid: mockDriver.uid,
    ride_id: "ride_abc123",
    created_at: new Date("2023-05-20T10:15:00"),
    status: RideStatus.ARRIVED,
  },
  {
    id: "reg_4",
    uid: mockDriver.uid,
    ride_id: "ride_abc123",
    created_at: new Date("2023-05-20T10:16:30"),
    status: RideStatus.IN_PROGRESS,
  },
].sort((a, b) => b.created_at.getTime() - a.created_at.getTime());

// Main Mock Ride
const mockRide: Ride = {
  id: "ride_abc123",
  created_at: new Date("2023-05-20T10:00:00"),
  client: mockClient,
  driver: mockDriver,
  origin: mockOrigin,
  destination: mockDestination,
  registries: mockRegistries,
  vehicle: mockVehicle,
  pricing: pricingInfoMock,
  distances: distancesInfoMock,
};


// Function to update ride status
function updateRideStatus(
  ride: Ride,
  newStatus: RideStatus,
  uid: string
): Ride {
  const newRegistry: RideRegistry = {
    id: `reg_${Math.random().toString(36).substring(2, 10)}`,
    uid,
    ride_id: ride.id,
    created_at: new Date(),
    status: newStatus,
  };

  return {
    ...ride,
    registries: [...ride.registries, newRegistry],
  };
}

export { mockRide, updateRideStatus };
