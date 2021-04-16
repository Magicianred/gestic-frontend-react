import * as React from 'react';
import { useForm } from 'react-hook-form';

import { Box, FormControl, Button, Stack, Text, Link } from '@chakra-ui/react';

import * as E from './styles';
import { CustomInput } from '../../components/CustomInput';

const Login = () => {
  const { handleSubmit, register, formState } = useForm();

  const { errors } = formState;

  function onSubmit(values) {
    console.log('errors => ', errors);
    return new Promise(resolve => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  console.log('errors => ', errors);

  return (
    <E.Container>
      <E.Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <Stack spacing={2}>
              <CustomInput
                name="email"
                placeholder="Email"
                ref={register('name', { required: true })}
                errorMessage={errors.name && 'Campo obrigatório'}
              />

              <Box my={2} />

              <CustomInput
                name="password"
                placeholder="Senha"
                ref={register('password', { required: true })}
                errorMessage={errors.password && 'Campo obrigatório'}
              />
            </Stack>
          </FormControl>
          <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
            <Button
              mt={7}
              width="100%"
              colorScheme="teal"
              isLoading={formState.isSubmitting}
              type="submit"
              display="flex"
              alignSelf="end"
            >
              Entrar na plataforma
            </Button>

            <Text mt={5}>
              Não possui conta?{' '}
              <Link color="teal.500" href="#">
                Clique aqui e crie agora
              </Link>
            </Text>
          </Box>
        </form>
      </E.Box>
    </E.Container>
  );
};

export default Login;
