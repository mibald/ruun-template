import { DocumentPickerResult } from 'expo-document-picker';
import * as yup from 'yup';

export const documentPickerValidation = (name: string, message: string) => {
    return yup.mixed<DocumentPickerResult>().test(name, message, (value) => {
        if (value && value.assets && value.assets.length > 0) {
            return value.assets[0].uri !== undefined && value.assets[0].uri !== null;
        }

        if (value && value.canceled) {
            return false;
        }
        return false;
    })
}