import { View } from "react-native";
import { RideRegistry } from "../types/ride-registry.type";
import { Text } from "@core/components";
import { tv } from "tailwind-variants";
import { rideStatusIcons } from "../utils/ride-status-icons.util";
import { COLORS } from "@core/const";

interface Props {
    registry: RideRegistry;
    isLastStatus: boolean;
}

export const RideRegistryCard = ({ registry, isLastStatus }: Props) => {
    const Icon = rideStatusIcons[registry.status];

    return (
        <View className={card({ enabled: isLastStatus })}>
            <View className="mr-2">
                <Icon color={COLORS.primary}/>
            </View>
            <Text weight="semibold">{registry.status}</Text>
        </View>
    )
}

const card = tv({
    base: "p-2 rounded-lg bg-zinc-100 border flex-row border-zinc-300 items-center",
    variants: {
        enabled: {
            true: "border-primary"
        }
    }
})