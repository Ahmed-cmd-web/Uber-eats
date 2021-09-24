import colors from "./colors";

export default [
  {
    placeholder: "Register",
    bg: colors.red,
    onpress: (e) => e.navigate('Register'),
  },
  {
    placeholder: "Login",
    bg: colors.green,
    onpress: (e) => e.navigate('Login'),
  },
];