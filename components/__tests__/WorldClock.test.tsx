import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';

import server from '@/__msw__/server';
import renderApp from '@/utils/test-utils/renderApp';

import WorldClock, { WorldClockProps } from '../WorldClock';

const worldClockPropsSample = {
  mainClockLocation: {
    location: 'London',
    utcOffsetHours: 1,
  },
  timezone: 'Asia/Jakarta',
  label: 'Any label',
};

function setup(props: WorldClockProps = worldClockPropsSample) {
  return renderApp(<WorldClock {...props} />);
}

beforeAll(() => {
  server.use(
    rest.get('*/timezone/Asia/Jakarta', (_req, res, ctx) => {
      return res(
        ctx.delay(1000),
        ctx.status(200, 'Mocked status'),
        ctx.json({
          abbreviation: 'WIB',
          client_ip: '110.137.157.1',
          datetime: '2023-09-30T17:15:00.512103+07:00',
          day_of_week: 6,
          day_of_year: 273,
          dst: false,
          dst_from: null,
          dst_offset: 0,
          dst_until: null,
          raw_offset: 25200,
          timezone: 'Asia/Jakarta',
          unixtime: 1696068900,
          utc_datetime: '2023-09-30T10:15:00.512103+00:00',
          utc_offset: '+07:00',
          week_number: 39,
        }),
      );
    }),
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

test('render local time based on provided timezone', async () => {
  setup();

  await screen.findByTestId('spinner');
  await waitFor(() =>
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument(),
  );
  await screen.findByText(/Jakarta/);
  await screen.findByText(/Any label/);
  await screen.findByText(/17:15/);
  await screen.findByText(/WIB/);
  await screen.findByText(/6 hours ahead London/);
});

test('emit remove event', async () => {
  const handleRemove = jest.fn();
  const user = userEvent.setup();

  setup({
    ...worldClockPropsSample,
    onRemove: handleRemove,
  });

  await screen.findByTestId('spinner');
  await waitFor(() =>
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument(),
  );

  await user.click(screen.getByTestId('removeButton'));
  expect(handleRemove).toHaveBeenCalledTimes(1);
});
