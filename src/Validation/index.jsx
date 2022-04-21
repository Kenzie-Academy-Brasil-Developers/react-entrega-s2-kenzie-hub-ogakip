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
    .min(8, "A senha deve conter ao menos 8 dígitos")
    .matches(/[a-z]/, "A senha deve conter ao menos uma letra")
    .matches(/[A-Z]/, "A senha deve conter ao menos uma letra maiúscula")
    .matches(/[0-9]/, "A senha deve conter ao menos um número")
    .matches(/\W/, "A senha deve conter ao menos um símbolo")
    .matches(/^(?!.*\s).{0,}$/, "Senha não deve conter espaços"),
  confirmPassword: yup
    .string()
    .required("A confirmação de senha é obrigatória!")
    .oneOf([yup.ref("password"), null], "As senhas não coincidem"),
  course_module: yup.string(),
  bio: yup.string().required("Bio é obrigatória"),
  contact: yup.string().required("Contato é obrigatório"),
});
