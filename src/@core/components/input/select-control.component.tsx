import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import { Select, SelectProps } from "./select.component";
import { LabeledItem } from "../bottom-sheets/select-bottom-sheet.component";

export interface SelectControlProps<T extends FieldValues, K extends LabeledItem>
  extends SelectProps<K> {
  controller: Control<T>;
  name: FieldPath<T>;
}

export const SelectControl = <T extends FieldValues, K extends LabeledItem>({
  controller,
  name,
  ...props
}: Omit<SelectControlProps<T, K>, "value">) => {
  return (
    <Controller
      name={name}
      control={controller}
      render={({ field, fieldState: { error } }) => {
        return (
          <Select
            {...props}
            onChange={field.onChange}
            value={field.value}
            error={error?.message}
          />
        );
      }}
    />
  );
};
