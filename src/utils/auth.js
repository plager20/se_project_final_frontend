import { request } from './NewsApi';

const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://api.plagerwtwr.com'
    : 'http://localhost:3001';

const register = ({ email, password, username }) => {
  return request(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  });
};

const login = ({ email, password }) => {
  return request(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
};

const getUserInfo = (token) => {
  return request(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export { register, login, getUserInfo };
