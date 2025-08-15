import { useMutation, useQuery } from "@tanstack/react-query";
import { geocodeCoordinates, textSearchPlaces } from "./google.api";
import { Coords } from "../types/coords.type";
import { reverseGeocodeAsync } from "expo-location";

export function useSearchPlaces(textQuery: string) {
  return useQuery({
    queryFn: () => textSearchPlaces({
      key: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY || "",
      location: "9.896774724234692,-67.35722551122308",
      query: textQuery,
      radius: 10000
    }),
    queryKey: ["search-places-text", textQuery],
    enabled: !!textQuery && textQuery.length > 4,
  });
}

export function useGeocodeCoords() {
  return useMutation({
    mutationFn: (coords: Coords) => reverseGeocodeAsync(coords),
    mutationKey: ["geocode"]
  })
}