import { COLORS } from "@core/const";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import { OtpInput } from "react-native-otp-entry";
import React from "react";

interface Props<T extends FieldValues> {
  controller: Control<T>;
  name: FieldPath<T>;
  paste?: boolean;
  onFilled?: () => void;
}

export const InputOtp = <T extends FieldValues>(props: Props<T>) => {
  return (
    <Controller
      control={props.controller}
      name={props.name}
      render={({ field, fieldState: { error } }) => (
        <React.Fragment>
          <OtpInput
            focusColor={COLORS.primary}
            placeholder="******"
            blurOnFilled
            numberOfDigits={6}
            onTextChange={field.onChange}
            onBlur={field.onBlur}
            onFilled={(value) => props.onFilled?.()}
            theme={{
              pinCodeContainerStyle: {
                borderRadius: 8,
                borderColor: error ? COLORS.primary : COLORS.secondary,
              },
            }}
          />
        </React.Fragment>
      )}
    />
  );
};
