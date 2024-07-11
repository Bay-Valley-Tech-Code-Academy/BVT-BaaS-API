import { useMutation } from "@tanstack/react-query";
import client from "../client";

async function loginOrganization(body) {
  const { data: result } = await client.post(`/organizations/login`, body);
  return result.data;
}

async function signupOrganization(body) {
  const { data: result } = await client.post(`/organizations/signup`, body);
  return result.data;
}

export function useLoginOrganization() {
  return useMutation({
    mutationFn: loginOrganization,
    onSuccess: (data) => {
      client.interceptors.request.use(
        (config) => {
          config.headers["Authorization"] = `Bearer ${data.accessToken}`;
          return config;
        },
        (error) => {
          // Handle the error
          return Promise.reject(error);
        },
      );
    },
  });
}

export function useSignupOrganization() {
  return useMutation({
    mutationFn: signupOrganization,
    onSuccess: (data) => {
      client.interceptors.request.use(
        (config) => {
          config.headers["Authorization"] = `Bearer ${data.accessToken}`;
          return config;
        },
        (error) => {
          // Handle the error
          return Promise.reject(error);
        },
      );
    },
  });
}
