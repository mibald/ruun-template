import { EventEmitter } from "expo";
import { LatLng, Region } from "react-native-maps";
import { create } from "zustand";

type MapEvents = {
    onRegionChangeComplete: (region: Region) => void;
    onManualSelection: (active: boolean) => void;
    onChangeLocation: (location: LatLng & { type: "origin" | "destination" }) => void;
}

const store = {
    eventEmitter: new EventEmitter<MapEvents>()
} as const;

export const useMapStore = create<typeof store>((set) => store);
