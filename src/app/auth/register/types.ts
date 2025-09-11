export interface RegisterFormData {
  firstName: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterFormProps {
  onSubmit: (data: RegisterFormData) => void;
  isLoading: boolean;
  onLoginClick?: () => void;
}
