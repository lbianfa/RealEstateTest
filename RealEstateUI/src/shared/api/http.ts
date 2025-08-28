import axios from "axios";
import { baseUrl } from "./endpoints";

export const http = axios.create({
    baseURL: baseUrl,
    transformResponse: [
        (response) => {
          try {
            return JSON.parse(response);
          } catch {
            return response;
          }
        },
      ],
});
