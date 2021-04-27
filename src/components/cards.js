import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
const {width} = Dimensions.get('screen');
const Cards = ({place, navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('DetailsScreen', place)}>
      <ImageBackground source={place.image} style={styles.cardImage}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: 20,
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          {place.name}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexDirection: 'row',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="place" size={20} color={COLORS.white} />
            <Text style={{marginLeft: 5, color: COLORS.white}}>
              {place.location}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Icon name="star" size={20} color={COLORS.white} />
            <Text style={{marginLeft: 5, color: COLORS.white}}>5.0 </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    borderRadius: 10,
    padding: 10,
    overflow: 'hidden',
  },
});
export default Cards;
