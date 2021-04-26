import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';

const {width} = Dimensions.get('screen');

const recommendedCard = ({place}) => {
  console.log({width});
  return (
    <ScrollView>
      <ImageBackground style={styles.rmCardsImage} source={place.image}>
        <Text
          style={{
            color: COLORS.white,
            fontWeight: 'bold',
            fontSize: 22,
            marginTop: 10,
          }}>
          {place.name}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <View style={{flexDirection: 'row', width: '100%', marginTop: 10}}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="place" size={22} color={COLORS.white} />
              <Text style={{color: COLORS.white, marginLeft: 5}}>
                {place.location}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="star" size={22} color={COLORS.white} />
              <Text style={{color: COLORS.white, marginLeft: 5}}>5.0 </Text>
            </View>
          </View>
          <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 13}}>
            {place.details}
          </Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rmCardsImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
  },
});
export default recommendedCard;
