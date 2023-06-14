import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchStock } from '../redux/stock';
import StockItem from '../components/StockItem';
import Loader from '../components/Loader';
import { responsiveHeight } from '../constants/responsive';
const Home = () => {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stock.stocks);
  const loading = useSelector((state) => state.stock.loading);

  useEffect(() => {
    dispatch(fetchStock());
  }, []);
  return (
    <View>
      {loading && <Loader />}
      {!loading && (
        <View style={styles.container}>
          <FlatList
            data={stocks}
            renderItem={({ item, index }) => {
              return <StockItem item={item} index={index} />;
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: responsiveHeight(80),
  },
});
