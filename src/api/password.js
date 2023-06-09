import axios from "axios";

const sendForgotPassword = async (email) => {
  const result = await axios.post(
    "http://192.168.14.156:3001/auth/forgot-password",
    {
      email: email,
    }
  );
  return result;
};

export { sendForgotPassword };
