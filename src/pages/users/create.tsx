import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SiderBar/index";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type CreateUserFormData = {
  email: string;
  password: string;
};
const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório."),
  email: yup.string().required("E-mail obrigatório.").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "No mínimo 6 caracteres."),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas precisam ser iguais"),
});
export default function CreateUser() {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });
  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
        <SideBar />
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p="8"
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Cria usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
              <Input name="name" label="Nome completo" {...register("name")} />
              <Input
                name="email"
                type="email"
                label="E-mail"
                {...register("email")}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
              <Input
                name="password"
                type="password"
                label="Senha"
                {...register("password")}
              />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmação da senha"
                {...register("password_confirmation")}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Link href="/users" passHref>
                  <Button as="a" colorScheme="whiteAlpha">
                    Cancelar
                  </Button>
                </Link>
              </Link>
              <Button type="submit" colorScheme="pink">
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
