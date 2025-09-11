export interface LoginFormData {
  phoneNumber: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
  isLoading?: boolean;
  onRegisterClick?: () => void;
}
