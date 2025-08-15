import axios, { AxiosResponse } from "axios";
import { PlacesTextSearchParams, TextSearchResponse } from "../types/google-place.type";
import { Coords } from "../types/coords.type";
import { GeocodeResponse } from "../types/geocode.type";

export async function textSearchPlaces(
  params: PlacesTextSearchParams
): Promise<TextSearchResponse> {
  const baseUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json";

  try {
    const response: AxiosResponse<TextSearchResponse> = await axios.get(baseUrl, {
      params: {
        location: params.location,
        query: params.query,
        radius: params.radius,
        key: params.key,
      },
    });

    if (response.data.status !== "OK") {
      throw new Error(`Google Places API error: ${response.data.status}`);
    }

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Request failed: ${error.message}`);
    }
    throw error;
  }
}

export async function geocodeCoordinates(coords: Coords) {
    try {
        const baseUrl = "https://maps.googleapis.com/maps/api/geocode/json";
        const response = await axios.get<GeocodeResponse>(baseUrl, {
            params: {
                latlng: `${coords.latitude},${coords.longitude}`,
                key: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY || ""
            }
        })

        return response.data;
    }
    catch ( error ) { throw error }
}
