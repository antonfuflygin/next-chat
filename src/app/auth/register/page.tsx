'use client';

import { useForm } from '@tanstack/react-form';
import { FC, useEffect, useState } from 'react';
import {
  ErrorMessage,
  Form,
  FormContainer,
  FormGroup,
  Input,
  Label,
  LeftPanel,
  LoginLink,
  Page,
  RightPanel,
  SubmitButton,
  Title,
} from './RegisterForm';
import { RegisterFormProps } from './types';

export const RegisterPage: FC<RegisterFormProps> = ({ isLoading = false, onLoginClick, onSubmit }) => {
  const [isClient, setIsClient] = useState(false);

  const form = useForm({
    defaultValues: {
      firstName: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: ({ value }) => {
      onSubmit?.(value);
    },
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Валидационные функции вынесены для читаемости
  const validateFirstName = (value: string) => {
    if (!value.trim()) return 'Имя обязательно';
    if (value.length < 2) return 'Имя слишком короткое';
    return undefined;
  };

  const validatePhoneNumber = (value: string) => {
    if (!value) return 'Телефон обязателен';
    if (!/^(\+7|8)[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/.test(value)) {
      return 'Введите корректный телефонный номер';
    }
    return undefined;
  };

  const validatePassword = (value: string) => {
    if (!value) return 'Пароль обязателен';
    if (value.length < 6) return 'Пароль должен содержать минимум 6 символов';
    return undefined;
  };

  const validateConfirmPassword = (value: string) => {
    const password = form.getFieldValue('password');
    if (!value) return 'Подтверждение пароля обязательно';
    if (value !== password) return 'Пароли не совпадают';
    return undefined;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    form.handleSubmit();
  };

  if (!isClient) {
    return (
      <Page>
        <LeftPanel />
        <RightPanel>
          <FormContainer>
            <div className="skeleton-loading">Загрузка...</div>
          </FormContainer>
        </RightPanel>
      </Page>
    );
  }

  return (
    <Page>
      <LeftPanel />
      <RightPanel>
        <FormContainer>
          <Title>Создание аккаунта</Title>

          <Form onSubmit={handleFormSubmit}>
            {/* Поле имени */}
            <form.Field name="firstName" validators={{ onChange: ({ value }) => validateFirstName(value) }}>
              {(field) => (
                <FormGroup>
                  <Label htmlFor={field.name}>Имя</Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    type="text"
                    value={field.state.value}
                    $hasError={field.state.meta.errors.length > 0}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Введите Ваше имя"
                    disabled={isLoading}
                  />
                  {field.state.meta.errors.map((error) => (
                    <ErrorMessage key={error}>{error}</ErrorMessage>
                  ))}
                </FormGroup>
              )}
            </form.Field>

            {/* Поле телефона */}
            <form.Field name="phoneNumber" validators={{ onChange: ({ value }) => validatePhoneNumber(value) }}>
              {(field) => (
                <FormGroup>
                  <Label htmlFor={field.name}>Телефонный номер</Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    type="tel"
                    value={field.state.value}
                    $hasError={field.state.meta.errors.length > 0}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Введите Ваш номер телефона"
                    disabled={isLoading}
                  />
                  {field.state.meta.errors.map((error) => (
                    <ErrorMessage key={error}>{error}</ErrorMessage>
                  ))}
                </FormGroup>
              )}
            </form.Field>

            {/* Поле пароля */}
            <form.Field name="password" validators={{ onChange: ({ value }) => validatePassword(value) }}>
              {(field) => (
                <FormGroup>
                  <Label htmlFor={field.name}>Пароль</Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    type="password"
                    value={field.state.value}
                    $hasError={field.state.meta.errors.length > 0}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Введите пароль"
                    disabled={isLoading}
                  />
                  {field.state.meta.errors.map((error) => (
                    <ErrorMessage key={error}>{error}</ErrorMessage>
                  ))}
                </FormGroup>
              )}
            </form.Field>

            {/* Подтверждение пароля */}
            <form.Field name="confirmPassword" validators={{ onChange: ({ value }) => validateConfirmPassword(value) }}>
              {(field) => (
                <FormGroup>
                  <Label htmlFor={field.name}>Подтвердите пароль</Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    type="password"
                    value={field.state.value}
                    $hasError={field.state.meta.errors.length > 0}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Подтвердите пароль"
                    disabled={isLoading}
                  />
                  {field.state.meta.errors.map((error) => (
                    <ErrorMessage key={error}>{error}</ErrorMessage>
                  ))}
                </FormGroup>
              )}
            </form.Field>

            {/* Кнопка отправки */}
            <SubmitButton type="submit" disabled={isLoading || !form.state.canSubmit}>
              {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
            </SubmitButton>

            {/* Ссылка на вход */}
            <LoginLink>
              Уже есть аккаунт?{' '}
              <a href="/auth/login" onClick={onLoginClick}>
                Войти
              </a>
            </LoginLink>
          </Form>
        </FormContainer>
      </RightPanel>
    </Page>
  );
};

export default RegisterPage;
