/* eslint-disable testing-library/render-result-naming-convention */
import 'react-native';
import React from 'react';

import { render } from '@testing-library/react-native';

import { mockGetAll } from '~/../mocks/mockGetAll';
import RestaurantsLits from '~/features/restaurants/screens/list';

jest.mock('~/features/restaurants//api/getAll', () => mockGetAll());

describe('<RestaurantsLits />', () => {
  it('Render the list', async () => {
    const { getByTestId } = render(<RestaurantsLits />);
    expect(getByTestId('flat-list')).toBeDefined();
  });

  it('Show the modal on error', async () => {
    jest.mock('~/features/restaurants//api/getAll', () => {
      throw new Error();
    });
    const { findByTestId } = render(<RestaurantsLits />);
    expect(await findByTestId('error-modal')).toBeDefined();
  });

  it('Show the empty state', async () => {
    jest.mock('~/features/restaurants//api/getAll', () => []);
    const { findByTestId } = render(<RestaurantsLits />);
    expect(await findByTestId('empty-state')).toBeDefined();
  });
});
