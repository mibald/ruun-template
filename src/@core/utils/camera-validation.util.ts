import { Picture } from '@core/components';
import * as yup from 'yup';

export const cameraValidation = (name: string, message: string) => {
    return yup.mixed<Picture>().test(name, message, (value) => {
        if ( value && value.uri ) {
            return value.uri !== undefined && value.uri !== null;
        }

        return false;
    })
}