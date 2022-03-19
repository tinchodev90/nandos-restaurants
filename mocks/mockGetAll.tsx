export const mockGetAll = () => ({
  data: {
    restaurant: {
      items: [
        {
          name: 'restaurant-name1',
          url: 'url1',
          geo: {
            address: {
              streetAddress: 'address1',
              addressLocality: 'address2',
              postalCode: 'postalCode1',
            },
          },
        },
      ],
    },
  },
});
