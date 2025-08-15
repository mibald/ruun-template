import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export type SignInForm = {
  email: string;
  password: string;
};

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
});

// Resolver for React Hook Form
export const signInFormResolver = yupResolver(signInSchema);