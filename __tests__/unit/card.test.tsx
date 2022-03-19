import 'react-native';
import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';

import Card from '~/features/restaurants/components/Card';

describe('<Card />', () => {
  it('Calls onPress', async () => {
    const onPress = jest.fn();

    const testID = 'cardTestId';

    const { getByTestId } = await render(
      <Card testID={testID} address="a" city="c" zipCode="z" title="t" onPress={onPress} />
    );

    const card = getByTestId(testID);

    fireEvent.press(card);

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
