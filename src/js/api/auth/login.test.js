const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

import { login } from './login';

describe('login', () => {
  it('fetch call returns something', async () => {
    const email = 'erikhhju@stud.noroff.no';
    const password = 'Myrkdalen1!';

    const result = await login(email, password);

    expect(typeof result).toBe('object');
  });

  it('puts a token in local storage', async () => {
    localStorage.setItem('token', 'dummyToken');
    const email = 'erikhhju@stud.noroff.no';
    const password = 'Myrkdalen1!';

    await login(email, password);

    const token = localStorage.getItem('token');
    expect(token).not.toBeNull();
  });
});
