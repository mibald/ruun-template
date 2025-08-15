import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { cameraValidation, documentPickerValidation, selectValidation } from '@core/utils';
import { DocumentPickerResult } from 'expo-document-picker';
import { Picture } from '@core/components';
import { Resolver } from 'react-hook-form';

type SelectOption = {
    label: string;
}
export type CreateVehicleFormProps = {
    registrationCert: DocumentPickerResult;
    insurance: DocumentPickerResult;
    vehicleFrontPicture: Picture;
    color: SelectOption;
    model: string;
    year: SelectOption;
    brand: SelectOption;
    licensePlate: string;
}

export const defaultValuesCreateVehicleFormProps: CreateVehicleFormProps = {
    registrationCert: {
        canceled: false,
        assets: [],
    },
    vehicleFrontPicture: {
        uri: "",
        width: 0,
        height: 0,
        base64: "",
    },
    licensePlate: "",
    insurance: {
        canceled: false,
        assets: [],
    },
    color: { label: "" },
    model: "",
    year: { label: "" },
    brand: { label: "" },
}

export const createVehicleSchema = yup.object({
    registrationCert: documentPickerValidation('registrationCert', "Registration document is required"),
    insurance: documentPickerValidation('insuranceCert', "Insurance document is required"),
    vehicleFrontPicture: cameraValidation('vehicleFrontPicture', "Vehicle front picture is required"),
    licensePlate: yup.string().required("License Plate is required").min(4, "License Plate must be at least 4 characters"),
    color: selectValidation('color', "Color is required"),
    model: yup.string().required("Model is required").min(4, "Model must be at least 4 characters"),
    year: selectValidation('year', "Year is required"),
    brand: selectValidation('brand', "Brand is required"),
});

export const createVehicleResolver = yupResolver(createVehicleSchema) as Resolver<CreateVehicleFormProps>;