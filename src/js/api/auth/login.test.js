const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = {
  getItem: localStorageMock.getItem,
  setItem: localStorageMock.setItem,
  removeItem: localStorageMock.removeItem,
  clear: localStorageMock.clear,
};
const email = 'erikhhju@stud.noroff.no';
const password = 'Myrkdalen1!';
const token = 'dummyToken';

import { login } from './login';

describe('login', () => {
  const mockFetchSuccess = jest.fn().mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue({
      email: email,
      accessToken: token,
    }),
  });
  global.fetch = mockFetchSuccess;

  it('fetch call returns something', async () => {
    const result = await login(email, password);

    expect(typeof result).toBe('object');
  });

  it('puts a token in local storage', async () => {
    localStorage.setItem('token', 'dummyToken');
    const email = 'erikhhju@stud.noroff.no';
    const password = 'Myrkdalen1!';

    await login(email, password);

    expect(token).not.toBeNull();
  });
});
