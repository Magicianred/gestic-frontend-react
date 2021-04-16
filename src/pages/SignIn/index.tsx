import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box, Button, Stack, Text, Link } from '@chakra-ui/react';

import * as E from './styles';
import { CustomInput } from '../../components/CustomInput';

const schema = yup.object().shape({
  email: yup.string().email('Digite um email válido').required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
});

type SignInFormInputs = {
  email: string;
  password: string;
};

const Login = () => {
  const { handleSubmit, formState, control } = useForm<SignInFormInputs>({
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  const onSubmit = (data: SignInFormInputs) => console.log(data);

  return (
    <E.Container>
      <E.Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <CustomInput {...field} type="email" placeholder="Email" errorMessage={errors?.email?.message} />
              )}
            />

            <Box my={2} />

            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <CustomInput
                  {...field}
                  type="password"
                  name="password"
                  placeholder="Senha"
                  errorMessage={errors?.password?.message}
                />
              )}
            />
          </Stack>
          <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
            <Button
              mt={7}
              width="100%"
              colorScheme="teal"
              isLoading={formState.isSubmitting}
              type="submit"
              display="flex"
              alignSelf="end"
              disabled={Object.values(errors).length > 0}
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
