import { VehicleClass } from "../type/vehicle-class.type";
import { VehicleType } from "../type/vehicle-type.type";
import { Vehicle } from "../type/vehicle.type";

export const vehicles: Vehicle[] = [
    {
        id: "v1",
        model: "Toyota Corolla",
        year: 2022,
        created_at: new Date("2022-01-15"),
        type: VehicleType.CAR,
        classes: [VehicleClass.ECONOMY, VehicleClass.COMFORT],
        picture: "https://http2.mlstatic.com/D_NQ_NP_650186-MLV81854250339_012025-O.webp",
        licensePlate: "ABC1234",
        color: "Silver",
        status: "APPROVED",
        insuranceExpiry: new Date("2024-12-31"),
        isActive: true,
        documents: {
            registration: {
                url: "https://example.com/docs/v1-registration.pdf",
                expiry: new Date("2025-01-15")
            },
            insurance: {
                url: "https://example.com/docs/v1-insurance.pdf",
                expiry: new Date("2024-12-31")
            }
        },
        metrics: {
            tripsCompleted: 142,
            avgRating: 4.8
        }
    },
    {
        id: "v2",
        model: "Tesla Model S",
        year: 2023,
        created_at: new Date("2023-03-20"),
        type: VehicleType.CAR,
        classes: [VehicleClass.PREMIUM, VehicleClass.LUXURY, VehicleClass.ELECTRIC],
        picture: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Performance-Desktop.jpg",
        licensePlate: "TESLA2023",
        color: "Midnight Blue",
        status: "APPROVED",
        insuranceExpiry: new Date("2024-06-30"),
        isActive: true,
        documents: {
            registration: {
                url: "https://example.com/docs/v2-registration.pdf",
                expiry: new Date("2026-03-20")
            },
            insurance: {
                url: "https://example.com/docs/v2-insurance.pdf",
                expiry: new Date("2024-06-30")
            }
        },
        metrics: {
            tripsCompleted: 89,
            avgRating: 4.9
        }
    },
    {
        id: "v3",
        model: "Honda Civic",
        year: 2021,
        created_at: new Date("2021-11-05"),
        type: VehicleType.CAR,
        classes: [VehicleClass.COMFORT],
        picture: "https://centralohio.hondadealers.com/-/media/Honda-Automobiles/Vehicles/2020/Civic-Hatchback/Exterior-Interior/MY20-Civic-Hatch_ext-int_styling_bodylines.jpg",
        licensePlate: "CIVIC123",
        color: "White",
        status: "PENDING",
        insuranceExpiry: new Date("2023-12-15"),
        isActive: false,
        documents: {
            registration: {
                url: "https://example.com/docs/v3-registration.pdf",
                expiry: new Date("2023-11-05")
            },
            insurance: {
                url: "https://example.com/docs/v3-insurance.pdf",
                expiry: new Date("2023-12-15")
            }
        },
        metrics: {
            tripsCompleted: 215,
            avgRating: 4.7
        }
    },
    {
        id: "v4",
        model: "Harley-Davidson Sportster",
        year: 2023,
        created_at: new Date("2023-05-10"),
        type: VehicleType.BIKE,
        classes: [VehicleClass.PREMIUM],
        picture: "https://www.motofichas.com/images/cache/01-harley-davidson-sportster-s-2023-estudio-azul-01-739-a.jpg",
        licensePlate: "HD2023",
        color: "Black",
        status: "APPROVED",
        insuranceExpiry: new Date("2024-05-10"),
        isActive: true,
        documents: {
            registration: {
                url: "https://example.com/docs/v4-registration.pdf",
                expiry: new Date("2025-05-10")
            },
            insurance: {
                url: "https://example.com/docs/v4-insurance.pdf",
                expiry: new Date("2024-05-10")
            }
        },
        metrics: {
            tripsCompleted: 63,
            avgRating: 4.6
        }
    }
];

export const mockVehicle: Vehicle = vehicles[0];