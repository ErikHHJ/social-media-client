const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = {
  getItem: localStorageMock.getItem,
  setItem: localStorageMock.setItem,
  removeItem: localStorageMock.removeItem,
  clear: localStorageMock.clear,
};

import { logout } from './logout';

describe('logout', () => {
  it('removes the access token from local storage', () => {
    // Set the 'token' key in local storage
    localStorage.setItem('token', 'yourAccessToken');

    // Call the logout function
    logout();

    // Ensure that 'token' key is removed from local storage
    expect(localStorage.removeItem).toHaveBeenCalledWith('token');

    // Check if 'token' key in local storage is undefined after removal
    expect(localStorage.getItem('token')).toBeUndefined();
  });
});
