export interface GeocodeResponse {
    plus_code: PlusCode;
    results:   GeocodedPlace[];
    status:    string;
}

export interface PlusCode {
    compound_code: string;
    global_code:   string;
}

export interface GeocodedPlace {
    address_components: AddressComponent[];
    formatted_address:  string;
    geometry:           Geometry;
    navigation_points?: NavigationPoint[];
    place_id:           string;
    types:              string[];
    plus_code?:         PlusCode;
}

export interface AddressComponent {
    long_name:  string;
    short_name: string;
    types:      string[];
}

export interface Geometry {
    bounds?:       Bounds;
    location:      NortheastClass;
    location_type: LocationType;
    viewport:      Bounds;
}

export interface Bounds {
    northeast: NortheastClass;
    southwest: NortheastClass;
}

export interface NortheastClass {
    lat: number;
    lng: number;
}

export enum LocationType {
    Approximate = "APPROXIMATE",
    GeometricCenter = "GEOMETRIC_CENTER",
    Rooftop = "ROOFTOP",
}

export interface NavigationPoint {
    location: NavigationPointLocation;
}

export interface NavigationPointLocation {
    latitude:  number;
    longitude: number;
}
