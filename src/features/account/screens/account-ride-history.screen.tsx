import RideScreen from "@features/ride/screens/ride.screen";
import { Ride } from "@features/ride/types/ride.type";
import { StaticScreenProps } from "@react-navigation/native";

type Props = StaticScreenProps<{ ride: Ride }>;
export default function AccountRideHistoryScreen(props: Props) {
    return <RideScreen {...props} />
}