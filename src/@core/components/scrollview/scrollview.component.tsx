import { cssInterop } from "nativewind";
import { ScrollView } from "react-native";

export const ScrollViewNW = cssInterop(ScrollView, {
    className: "style",
})