const register = async () => {
  return new Promise((resolve, reject) => {
    resolve({ message: 'User successfully registered' });
  });
};

const login = async () => {
  return new Promise((resolve, reject) => {
    resolve({ token: 'a fake token' });
  });
};

const checkToken = async (token) => {
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: 'Gerald', email: 'fake@example.com', _id: 'fake-id' },
    });
  });
};

export { register, login, checkToken };
