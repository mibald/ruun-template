import * as yup from 'yup';

export const selectValidation = (name: string, message: string) => {
    return yup.mixed<{ label: string }>().test(name, message, (value) => {
        if (value && value.label) {
            return value.label !== undefined && value.label !== null && value.label !== "";
        }

        return false;
    })
}