import { RideStatus } from "../types/ride-status.enum";
import { Icon, IconArrowDownToArc, IconAward, IconCancel, IconCircleCheck, IconLoader, IconLocationQuestion } from "@tabler/icons-react-native";

export const rideStatusIcons: Record<RideStatus, Icon> = {
    [RideStatus.REQUESTED]: IconLocationQuestion,
    [RideStatus.ACCEPTED]: IconCircleCheck,
    [RideStatus.ARRIVED]: IconArrowDownToArc,
    [RideStatus.IN_PROGRESS]: IconLoader,
    [RideStatus.COMPLETED]: IconAward,
    [RideStatus.CANCELLED]: IconCancel
}