import axios from "axios";

import { REACT_APP_API_URL } from "@env";

export const getGrades = async () => {
  const result = await axios.get(`${REACT_APP_API_URL}/grades`);
  return result;
};
