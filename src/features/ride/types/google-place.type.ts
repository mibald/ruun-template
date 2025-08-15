export interface TextSearchResponse {
    status: string;
    results: Place[];
}

export interface Place {
  business_status: string;
  formatted_address: string;
  geometry: Geometry;
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  name: string;
  place_id: string;
  plus_code: PlusCode;
  reference: string;
  types: string[];
}

export interface Geometry {
  location: Location;
  viewport: Viewport;
}

export interface Location {
  lat: number;
  lng: number;
}

export interface Viewport {
  northeast: Location;
  southwest: Location;
}

export interface PlusCode {
  compound_code: string;
  global_code: string;
}

// Configuration interface
export interface PlacesTextSearchParams {
  location: string; // in "lat,lng" format
  query: string;
  radius: number; // in meters
  key: string;
}
