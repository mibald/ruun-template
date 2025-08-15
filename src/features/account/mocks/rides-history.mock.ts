import { mockRide } from "@features/ride/mocks/ride.mock";

export const ridesHistoryMock = [
    mockRide,
    mockRide,
    mockRide,
].map((ride, index) => ({ ...ride, id: `${ride.id}-${index}` }));