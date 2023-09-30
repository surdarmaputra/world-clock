import 'cross-fetch/polyfill';
import '@testing-library/jest-dom';

import server from './__msw__/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
