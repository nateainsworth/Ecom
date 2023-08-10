<script setup lang="ts">
  import { useForm } from 'vee-validate';
  import * as yup from 'yup';
  import { zxcvbn } from '@zxcvbn-ts/core';
  import { useAuthStore } from '~/store/auth';

  const schema = yup.object({
    email: yup
        .string()
        .email('Email must be a valid email')
        .required('Email is a required field'),
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .test('password-strength', 'Password is too weak.', (value) => {
          const result = zxcvbn(value as string);
          //TODO: maybe worth changing to ENV or database value for the specific site threshold score
          const scoreThreshold = 3; 
          return result.score >= scoreThreshold;
        })
        .required('Password is a required field'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Please confirm your password'),
  });

  const { defineInputBinds, errors, handleSubmit } = useForm({
    validationSchema: schema,
  });

  const email = defineInputBinds('email');
  const password = defineInputBinds('password');
  const confirmPassword = defineInputBinds('confirmPassword');

  const onSubmit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2));
    //await authStore.createAccount(values);
  });
</script>

<template>

  <form @submit="onSubmit" class="w-5/12 p-8 rounded-lg bg-white shadow-md">
    <h1 class="text-5xl grow pb-4">Create Account</h1>
    <hr/>
    <ElementsInputField 
    field-id="email"
    label="Email"
    type="email"
    :error="errors.email"
    :value="email"/>

    <ElementsInputField 
    field-id="password"
    label="Password"
    type="password"
    :error="errors.password"
    :value="password"/>

    <ElementsInputField 
    field-id="confirm-password"
    label="Confirm Password"
    type="password"
    :error="errors.confirmPassword"
    :value="confirmPassword"/>

    <button type="submit" class="w-full bg-teal-400 text-white py-2 px-4 rounded hover:bg-teal-600 focus:outline-none ">
      Create
    </button>
  </form>
</template>
