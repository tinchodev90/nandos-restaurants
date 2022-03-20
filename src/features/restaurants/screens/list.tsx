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
        setRestaurantsList(response?.data.restaurant?.items);
      } catch {
        setError('Something went wrong');
      } finally {
        SplashScreen.hide();
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
      <View style={[styles.loading]}>
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
        ListHeaderComponent={<VersionInfo />}
        ListFooterComponent={<View style={styles.listSpacing} />}
        ListEmptyComponent={
          <>
            {!loading && (
              <View testID="empty-state" style={[styles.container, styles.horizontal]}>
                <Text>No results found</Text>
              </View>
            )}
          </>
        }
      />
      <ErrorModal message={error} visible={!!error} onClose={() => setError('')} />
      <VersionInfo />
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
  loading: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default List;
