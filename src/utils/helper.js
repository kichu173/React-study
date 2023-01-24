export function filterData(searchText, restaurantsList) {
  return restaurantsList.filter(function (restaurant) {
    return restaurant?.data?.name
      ?.toLowerCase()
      .includes(searchText.toLowerCase());
  });
}
