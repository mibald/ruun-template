export interface InputTextProps {
    type?: "text" | "password" | "email" | "phone";
    value?: string;
    onChange?: (value: string) => void;
}