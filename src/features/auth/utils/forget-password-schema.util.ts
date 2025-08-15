import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const forgetPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
});

// Resolver for React Hook Form
export const forgetPasswordFormResolver = yupResolver(forgetPasswordSchema);