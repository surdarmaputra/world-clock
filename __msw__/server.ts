import { setupServer } from 'msw/node';

import { getDefaultMSW } from '@/api/generated/services/default/default.msw';

const handlers = getDefaultMSW();
const server = setupServer(...handlers);

export default server;
