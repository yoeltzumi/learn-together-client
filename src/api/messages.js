import axios from "axios";

import { REACT_APP_API_URL } from "@env";

export const getMessages = async () => {
  const result = await axios.get(`${REACT_APP_API_URL}/messages`);
  return result;
};
