import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome é obrigatório")
    .matches(/^(?!.*\d).{0,}$/, "Nome não deve conter números")
    .matches(/\w/, "Nome não deve conter símbolos"),
  email: yup
    .string()
    .required("Email é obrigatório!")
    .email("Email inválido, tente novamente!"),
  password: yup
    .string()
    .required("A senha é obrigatória!")
    .min(8, "Deve conter ao menos 8 dígitos")
    .matches(/[a-z]/, "Deve conter uma letra")
    .matches(/[A-Z]/, "Deve conter uma letra maiúscula")
    .matches(/[0-9]/, "Deve conter um número")
    .matches(/\W/, "Deve conter símbolos")
    .matches(/^(?!.*\s).{0,}$/, "Não pode conter espaços"),
  confirmPassword: yup
    .string()
    .required("A confirmação de senha é obrigatória!")
    .oneOf([yup.ref("password"), null], "As senhas não coincidem"),
});
