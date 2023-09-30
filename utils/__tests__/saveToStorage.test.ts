import saveToStorage from '../saveToStorage';

const originalLocalStorage = global.localStorage;

// Mock the localStorage API
const mockLocalStorage = {
  setItem: jest.fn(),
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

test('saves a string value to localStorage', () => {
  const key = 'someKey';
  const value = 'someStringValue';

  saveToStorage(key, value);
  expect(mockLocalStorage.setItem).toHaveBeenCalledWith(key, value);
});

test('saves an array value as JSON to localStorage', () => {
  const key = 'someKey';
  const value = [
    {
      timezone: 'Asia/Jakarta',
    },
    {
      timezone: 'Asia/Tokyo',
      label: 'Trip ideas',
    },
  ];

  saveToStorage(key, value);

  const expectedJSONString = JSON.stringify(value);
  expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
    key,
    expectedJSONString,
  );
});
