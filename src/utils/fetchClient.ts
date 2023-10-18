/* eslint-disable @typescript-eslint/no-explicit-any */

const API_KEY = process.env.STRAPI_API_TOKEN;
const API_URL = 'https://strapi-deployment-9fmb.onrender.com/api';
// const API_URL = 'http://localhost:1337/api';
// const API_URL = process.env.STRAPI_API_URL;

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: any = null,
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': `Bearer ${API_KEY}`,
    };
  }

  return fetch(API_URL + url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }

      return response.text();
    })
    .then(text => {
      return text ? JSON.parse(text) : null;
    });
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, data: any) => request<T>(url, 'POST', data),
  patch: <T>(url: string, data: any) => request<T>(url, 'PATCH', data),
  delete: (url: string) => request(url, 'DELETE'),
};
