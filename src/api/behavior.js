import axios from "axios";

import { REACT_APP_API_URL } from "@env";

export const getBehavior = async () => {
  const { data } = await axios.get(`${REACT_APP_API_URL}/behavior`);
  return data;
};
