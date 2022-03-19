import React from 'react';
import { NativeModules, StyleSheet, Text, View } from 'react-native';

import { colors, sizes } from '~/theme';

function VersionInfo() {
  const { RNVersionInfo } = NativeModules;
  const appVersion = RNVersionInfo?.appVersion;

  return (
    <View style={{ ...styles.container, marginVertical: sizes.l }}>
      <Text style={styles.text}>{'Nando`s Restaurants'}</Text>
      <View style={styles.container}>
        <Text testID="version-number" style={styles.text}>
          {appVersion}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: sizes.m,
    color: colors.gray2,
  },
});

export default VersionInfo;
