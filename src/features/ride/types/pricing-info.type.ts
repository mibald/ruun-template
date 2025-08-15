export interface PricingInfo {
    base: number;
    distance: number;
    time: number;
    total: number;
    currency: string;
    distanceUnit: string;
    timeUnit: string;
    pricePerDistance: number;
    pricePerTime: number;
    pricePerBase: number;
}

