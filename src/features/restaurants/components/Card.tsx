import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { colors, fonts, sizes } from '~/theme';

type CardProps = {
  title: string;
  address: string;
  city: string;
  zipCode: string;
  onPress: () => void;
  testID?: string;
};

function Card(props: CardProps) {
  const { title, address, city, zipCode, onPress, testID } = props;

  // Random borders just to make it a bit of colorfull
  const randomColor = Math.floor(Math.random() * 3) + 1;
  const borderColors = [colors.green1, colors.orange1, colors.green2];

  return (
    <TouchableOpacity
      testID={testID}
      style={{ ...styles.container, ...{ borderLeftColor: borderColors[randomColor - 1] } }}
      onPress={onPress}>
      <Text numberOfLines={1} style={styles.cardTitle}>
        {title}
      </Text>
      <Text numberOfLines={1} style={styles.cardText}>
        {address}
      </Text>
      <Text numberOfLines={2} style={styles.cardText}>
        {city}
      </Text>
      <Text numberOfLines={2} style={styles.cardText}>
        {zipCode}{' '}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 112,
    borderWidth: 1,
    backgroundColor: colors.white,
    borderTopColor: colors.gray1,
    borderRightColor: colors.gray1,
    borderBottomColor: colors.gray1,
    marginHorizontal: sizes.m,
    borderLeftWidth: 6,
    borderBottomRightRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: colors.gray4,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    paddingTop: sizes.xxs,
    paddingLeft: sizes.s,
    paddingRight: sizes.l,
    elevation: 2,
    marginBottom: sizes.m,
  },
  cardText: {
    ...fonts.SemiBold12,
    textTransform: 'uppercase',
    lineHeight: 24,
    color: colors.gray2,
  },
  cardTitle: {
    ...fonts.SemiBold16,
    fontWeight: '500',
    color: colors.gray3,
    lineHeight: 24,
    flexWrap: 'wrap',
    marginTop: sizes.xxs / 2,
  },
});

export default Card;
