import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import { Input, InputProps } from "./input.component";

export interface InputControlProps<T extends FieldValues> extends Omit<InputProps, "onBlur" | "onChangeText"> {
  controller: Control<T>;
  name: FieldPath<T>;
}

export const InputControl = <T extends FieldValues>({ ...props }: InputControlProps<T>) => {
  return (
    <Controller
      name={props.name}
      control={props.controller}
      render={({ field, fieldState: { error } }) => (
        // @ts-ignore
        <Input
          error={error?.message}
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          type={props.type}
          placeholder={props.placeholder}
          {...props}
        />
      )}
    />
  );
};
