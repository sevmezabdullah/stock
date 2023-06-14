import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Card } from 'react-native-paper';
import { responsiveWidth, responsiveHeight } from '../constants/responsive';
import { logos } from '../constants/uri';
const StockItem = ({ item, index }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.info}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Image
                  style={styles.logo}
                  source={{
                    uri: logos[index],
                  }}
                />
              </View>
              <View style={{ flexDirection: 'column' }}>
                <Text>{item.shortName}</Text>
                <Text>{item.longName}</Text>
              </View>
            </View>

            <View>
              <Text style={styles.price}>
                ${item.regularMarketPrice.toFixed(2)}
              </Text>
              <Text
                style={
                  item.regularMarketChangePercent >= 0
                    ? styles.changePercentPlus
                    : styles.changePercentMines
                }
              >
                {item.regularMarketChangePercent.toFixed(3)}
              </Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default StockItem;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(400),
    height: responsiveHeight(100),
  },
  card: {
    height: 80,
    backgroundColor: 'white',
  },
  info: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  changePercentPlus: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
  },
  changePercentMines: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginRight: 5,
  },
});
