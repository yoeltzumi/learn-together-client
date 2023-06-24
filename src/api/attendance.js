import axios from "axios";

import { REACT_APP_API_URL } from "@env";

export const getCurrentLesson = async () => {
  const result = await axios.get(`${REACT_APP_API_URL}/lessons/current`);
  return result.data && result.data.length > 0 ? result.data[0] : result;
};
