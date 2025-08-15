import { IconCarSuv, IconMotorbike } from "@tabler/icons-react-native";

export const vehicleOptionsMock = [
  {
    name: "Taxi",
    icon: IconCarSuv,
    disabled: false,
  },
  {
    name: "Bike",
    icon: IconMotorbike,
    disabled: true,
  },
] as const;
