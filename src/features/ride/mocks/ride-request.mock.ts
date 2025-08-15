import { mockClient } from "@features/common/mocks";
import { RideRequest } from "../types/ride-request.type";
import { locationsMock } from "./locations.mock";
import { pricingInfoMock } from "./pricing-info.mock";

export const rideRequestMock: RideRequest = {
    client: mockClient,
    origin: locationsMock[0],
    destination: locationsMock[1],
    pricing: pricingInfoMock,
}