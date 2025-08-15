import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import { InputCamera, InputCameraProps } from "./input-camera.component";

interface InputCameraControlProps<T extends FieldValues> extends InputCameraProps {
    controller: Control<T>;
    name: FieldPath<T>;
}

export const InputCameraControl = <T extends FieldValues>({
  ...props
}: InputCameraControlProps<T>) => {
  return (
    <Controller
      name={props.name}
      control={props.controller}
      render={({ field, fieldState: { error } }) => (
        <InputCamera
          error={error?.message}
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          onPress={props.onPress}
          {...props}
        />
      )}
    />
  );
};
