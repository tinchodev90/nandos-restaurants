/* eslint-disable testing-library/render-result-naming-convention */
import 'react-native';
import React from 'react';

import { render } from '@testing-library/react-native';

import VersionInfo from '~/features/restaurants/components/VersionInfo';

jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');

  RN.NativeModules.RNVersionInfo = {
    appVersion: '1.0.0',
  };

  return RN;
});

describe('<VersionInfo />', () => {
  it('Show the verison number', async () => {
    const { getByText } = render(<VersionInfo />);
    expect(getByText('1.0.0')).toBeDefined();
  });
});
