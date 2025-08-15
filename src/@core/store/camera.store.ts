import { Picture } from "@core/components";
import { EventEmitter } from "expo";
import { create } from "zustand";

type CameraEvents = {
    onNewPicture: (picture: Picture) => void;
}

const store = {
    eventEmitter: new EventEmitter<CameraEvents>()
} as const;

export const useCameraStore = create<typeof store>(() => store);