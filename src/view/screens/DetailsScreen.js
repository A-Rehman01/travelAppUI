import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailsScreen = ({route, navigation}) => {
  const place = route.params;
  // console.log(data);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground style={{flex: 0.7}} source={place.image}>
        <View style={styles.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={COLORS.white}
            onPress={() => navigation.goBack()}
          />
          <Icon name="more-vert" size={28} color={COLORS.white} />
        </View>
        <View style={styles.imageDetails}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 30,
              fontWeight: 'bold',
              marginBottom: 20,
              width: '70%',
            }}>
            {place.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 20,
              alignItems: 'center',
            }}>
            <Icon name="star" color={COLORS.orange} size={30} />
            <Text
              style={{
                color: COLORS.white,
                fontWeight: 'bold',
                fontSize: 20,
                marginLeft: 5,
              }}>
              5.0
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.detailsContainer}>
        <View style={styles.iconContainer}>
          <Icon name="favorite" color={COLORS.red} size={30} />
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Icon name="place" size={28} color={COLORS.primary} />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.primary,
              marginLeft: 5,
            }}>
            {place.location}
          </Text>
        </View>
        <Text style={{marginTop: 20, fontWeight: 'bold', fontSize: 20}}>
          About the Trip
        </Text>
        <Text style={{marginTop: 20, lineHeight: 22}}>{place.details}</Text>
      </View>
      <View style={styles.footer}>
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 18,
              color: COLORS.white,
              fontWeight: 'bold',
            }}>
            $100
          </Text>
          <Text
            style={{
              fontSize: 12,
              marginLeft: 2,
              color: COLORS.grey,
              fontWeight: 'bold',
            }}>
            {'  '}/ PER DAY
          </Text>
        </View>
        <View style={styles.bookBtn}>
          <Text
            style={{fontWeight: 'bold', fontSize: 16, color: COLORS.primary}}>
            Book Now
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  imageDetails: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
  },
  detailsContainer: {
    top: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: COLORS.white,
    flex: 0.3,
  },
  iconContainer: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: -30,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    paddingHorizontal: 20,
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  bookBtn: {
    height: 50,
    width: 150,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default DetailsScreen;
