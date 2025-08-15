import { Text } from "@core/components";
import { COLORS } from "@core/const";
import { Icon } from "@tabler/icons-react-native";
import { TouchableOpacity, View } from "react-native"
import { RootStackParamList } from "src/navigator/stacks/root.stack";

export interface AccountHomeButtonProps {
    title?: string;
    description?: string;
    icon?: Icon;
    onPress?: (screenProps: RootStackParamList["Account"]) => void;
    screenProps?: RootStackParamList["Account"]
}

export const AccountHomeButton = ({ description, icon: Icon, title, onPress, screenProps }: AccountHomeButtonProps) => {
    return (
        <TouchableOpacity 
        onPress={() => onPress?.(screenProps)}
        className="flex-row items-center gap-8 p-4">
            {
                Icon ? <Icon size={28} color={COLORS.primary} /> : null
            }
            <View>
                <Text size="xl" weight="semibold">{title}</Text>
                { description && <Text className="text-primary underline">{description}</Text>}
            </View>
        </TouchableOpacity>
    )
}