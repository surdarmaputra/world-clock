import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const client = axios.create({
  baseURL: 'https://worldtimeapi.org/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export async function request<T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> {
  const { url, ...restOfConfig } = config;
  const response = await client({
    url,
    ...restOfConfig,
    ...options,
  });
  return response?.data;
}

export type ErrorType<Error> = AxiosError<Error>;

export type BodyType<BodyData> = BodyData;
