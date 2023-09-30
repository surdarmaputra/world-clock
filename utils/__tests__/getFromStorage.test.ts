import getFromStorage from '../getFromStorage';

const originalLocalStorage = global.localStorage;

// Mock the localStorage API
const mockLocalStorage = {
  getItem: jest.fn(),
};

// Mock the global window object
beforeEach(() => {
  Object.defineProperty(global, 'localStorage', {
    value: mockLocalStorage,
  });
});

afterEach(() => {
  jest.clearAllMocks();

  // Restore the original window.localStorage after each test
  Object.defineProperty(global, 'localStorage', {
    value: originalLocalStorage,
  });
});

test('returns null when localStorage value is null', () => {
  mockLocalStorage.getItem.mockReturnValueOnce(null);

  const result = getFromStorage('someKey');

  expect(result).toBeNull();
  expect(mockLocalStorage.getItem).toHaveBeenCalledWith('someKey');
});

test('returns parsed JSON when localStorage value is JSON', () => {
  const jsonString = JSON.stringify({ foo: 'bar' });
  mockLocalStorage.getItem.mockReturnValueOnce(jsonString);

  const result = getFromStorage('someKey');

  expect(result).toEqual({ foo: 'bar' });
  expect(mockLocalStorage.getItem).toHaveBeenCalledWith('someKey');
});

test('returns raw string when localStorage value is not JSON', () => {
  const stringValue = 'non-json-value';
  mockLocalStorage.getItem.mockReturnValueOnce(stringValue);

  const result = getFromStorage('someKey');

  expect(result).toEqual(stringValue);
  expect(mockLocalStorage.getItem).toHaveBeenCalledWith('someKey');
});
