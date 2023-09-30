import { screen, waitFor } from '@testing-library/react';

import renderApp from '@/utils/test-utils/renderApp';

import MainClock, { MainClockProps } from '../MainClock';

function setup(props: MainClockProps = {}) {
  return renderApp(<MainClock {...props} />);
}

test('render local time based on location', async () => {
  setup();
  await screen.findByTestId('spinner');
  await waitFor(() =>
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument(),
  );
  await screen.findByText(/London/);
  await screen.findByText(/09:34/);
});
