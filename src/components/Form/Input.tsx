import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ label, name, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && (
        <FormLabel htmlFor={name} fontWeight={"bold"}>
          {label}
        </FormLabel>
      )}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor={"purple.600"}
        variant={"filled"}
        size={"lg"}
        {...rest}
      />
    </FormControl>
  );
}
