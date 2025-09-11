'use client';

import { useForm } from '@tanstack/react-form';
import { FC } from 'react';
import * as S from './LoginForm.styled';
import { LoginFormProps } from './types';

const LoginPage: FC<LoginFormProps> = ({ isLoading = false, onRegisterClick }) => {
  const form = useForm({
    defaultValues: {
      phoneNumber: '',
      password: '',
      rememberMe: false,
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  const validateNumber = (value: string) => {
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

  const renderEmailField = () => (
    <form.Field name="phoneNumber" validators={{ onChange: ({ value }) => validateNumber(value) }}>
      {(field) => (
        <S.FormGroup>
          <S.Label htmlFor={field.name}>Телефонный номер</S.Label>
          <S.Input
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
            <S.ErrorMessage key={error}>{error}</S.ErrorMessage>
          ))}
        </S.FormGroup>
      )}
    </form.Field>
  );

  const renderPasswordField = () => (
    <form.Field name="password" validators={{ onChange: ({ value }) => validatePassword(value) }}>
      {(field) => (
        <S.FormGroup>
          <S.Label htmlFor={field.name}>Пароль</S.Label>
          <S.Input
            id={field.name}
            name={field.name}
            type="password"
            value={field.state.value}
            $hasError={field.state.meta.errors.length > 0}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value)}
            placeholder="Введите ваш пароль"
            disabled={isLoading}
          />
          {field.state.meta.errors.map((error) => (
            <S.ErrorMessage key={error}>{error}</S.ErrorMessage>
          ))}
        </S.FormGroup>
      )}
    </form.Field>
  );

  const renderRememberMeField = () => (
    <form.Field name="rememberMe">
      {(field) => (
        <S.CheckboxContainer>
          <S.Checkbox
            id="rememberMe"
            type="checkbox"
            checked={field.state.value}
            onChange={(e) => field.handleChange(e.target.checked)}
            disabled={isLoading}
          />
          <S.Label htmlFor="rememberMe">Запомнить меня</S.Label>
        </S.CheckboxContainer>
      )}
    </form.Field>
  );

  const renderSubmitButton = () => (
    <S.SubmitButton type="submit" disabled={isLoading || !form.state.canSubmit}>
      {isLoading ? 'Вход...' : 'Войти'}
    </S.SubmitButton>
  );

  const renderRegisterLink = () => (
    <S.RegisterLink>
      Нет аккаунта?{' '}
      <a href="/auth/register" onClick={onRegisterClick}>
        Зарегистрироваться
      </a>
    </S.RegisterLink>
  );

  return (
    <S.Page>
      <S.LeftPanel />
      <S.RightPanel>
        <S.FormContainer>
          <S.Title>Авторизация</S.Title>

          <S.Form onSubmit={handleFormSubmit}>
            {renderEmailField()}
            {renderPasswordField()}
            {renderRememberMeField()}
            {renderSubmitButton()}
            {renderRegisterLink()}
          </S.Form>
        </S.FormContainer>
      </S.RightPanel>
    </S.Page>
  );
};

export default LoginPage;
