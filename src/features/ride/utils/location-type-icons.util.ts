import { Icon, IconMapPin, IconUser } from "@tabler/icons-react-native";

export const locationTypeIcons: Record<"origin" | "destination", Icon> = {
    origin: IconUser,
    destination: IconMapPin
}