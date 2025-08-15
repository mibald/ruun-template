import { Icon } from "@tabler/icons-react-native";
import { TextInputProps } from "react-native";

type NativeInputProps = Pick<TextInputProps, "onFocus" | "onBlur" | "textAlignVertical" | "multiline">;

export interface BaseInputProps extends NativeInputProps {
    label?: string;
    placeholder?: string;
    description?: string;
    icons?: {
        left?: Icon;
        right?: Icon;
    };
    paste?: boolean;
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
    loading?: boolean;
    containerClassName?: string;
    autoFocus?: boolean;
    error?: string;
    disabled?: boolean;
    onPress?: () => void;
    textAlign?: "center" | "left" | "right"
}