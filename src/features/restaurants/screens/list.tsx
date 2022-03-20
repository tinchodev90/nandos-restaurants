import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import { getAllRestaurants } from '~/features/restaurants//api/getAll';
import Card from '~/features/restaurants/components/Card';
import ErrorModal from '~/features/restaurants/components/ErrorModal';
import VersionInfo from '~/features/restaurants/components/VersionInfo';
import { colors, sizes } from '~/theme';
import type { Restaurant } from '~/types';

function List() {
  const [restaurantsList, setRestaurantsList] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const initialize = async () => {
      try {
        setLoading(true);
        const { data: response } = await getAllRestaurants();
        SplashScreen.hide();
        setRestaurantsList(response?.data.restaurant?.items);
      } catch {
        SplashScreen.hide();
        setError('Something went wrong');
      } finally {
        setLoading(false);
      }
    };
    initialize();
  }, []);

  const renderItem = ({ item }: { item: Restaurant }) => {
    const {
      geo: {
        address: { streetAddress, addressLocality, postalCode },
      },
    } = item;
    return (
      <Card
        title={item.name}
        address={streetAddress}
        city={addressLocality}
        zipCode={postalCode}
        onPress={async () => await Linking.openURL(item.url)}
      />
    );
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color={colors.orange1} />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        testID="flat-list"
        data={restaurantsList}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        ListFooterComponent={<View style={styles.listSpacing} />}
        ListHeaderComponent={<VersionInfo />}
        ListEmptyComponent={
          <View testID="empty-state" style={[styles.container, styles.horizontal]}>
            <Text>No results found</Text>
          </View>
        }
      />
      <ErrorModal message={error} visible={!!error} onClose={() => setError('')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listSpacing: {
    marginBottom: sizes.l * 2,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default List;
