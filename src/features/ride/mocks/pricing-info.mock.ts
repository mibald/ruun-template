import { PricingInfo } from "../types/pricing-info.type";

export const pricingInfoMock: PricingInfo = {
    base: 5,
    distance: 10,
    time: 15,
    total: 30,
    currency: "USD",
    distanceUnit: "km",
    timeUnit: "min",
    pricePerDistance: 2,
    pricePerTime: 1,
    pricePerBase: 5,
};