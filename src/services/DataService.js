import axios from "axios";
import { config } from "../config";

export const getDataWithToken = async (url) => {
  const response = await axios.get(url, {
    headers: { Authorization: "Bearer " + config.api.token },
  });
  return response?.data;
};

export const getDataWithKey = async (url) => {
  const response = await axios.get(url, {
    params: { api_key: config.api.key },
  });
  return response?.data;
};
