import { FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import * as React from 'react';

type Props = {
  name: string;
  placeholder: string;
  ref: any;
  errorMessage?: string;
};

const CustomInput = ({ name, placeholder, ref, errorMessage }: Props) => {
  return (
    <>
      <FormLabel htmlFor={name}>{placeholder}</FormLabel>
      <Input name={name} placeholder={placeholder} ref={ref} />
      {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </>
  );
};

export { CustomInput };
