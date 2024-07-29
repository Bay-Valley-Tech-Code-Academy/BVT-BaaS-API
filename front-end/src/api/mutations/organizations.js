import { useMutation } from "@tanstack/react-query";
import client from "../client";

let authInterceptorId;

const authInterceptor = (config, data) => {
  config.headers["Authorization"] = `Bearer ${data.accessToken}`;
  return config;
};

async function loginOrganization(body) {
  const { data: result } = await client.post(`/organizations/login`, body);
  return result.data;
}

async function signupOrganization(body) {
  const { data: result } = await client.post(`/organizations/signup`, body);
  return result.data;
}

async function logoutOrganization() {
  const { data: result } = await client.post(`/organizations/logout`);
  return result.data;
}

export function useLoginOrganization() {
  return useMutation({
    mutationFn: loginOrganization,
    onSuccess: (data) => {
      authInterceptorId = client.interceptors.request.use(
        (config) => authInterceptor(config, data),
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
      authInterceptorId = client.interceptors.request.use(
        (config) => authInterceptor(config, data),
        (error) => {
          // Handle the error
          return Promise.reject(error);
        },
      );
    },
  });
}

export function useLogoutOrganization() {
  return useMutation({
    mutationFn: logoutOrganization,
    onSuccess: () => {
      client.interceptors.request.eject(authInterceptorId);
    },
  });
}
