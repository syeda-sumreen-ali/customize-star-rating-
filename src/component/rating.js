import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import StarRatingComponent from './star-rating/starRating2';

const Rating = ({rating}) => {
  return (
    <View style={styles._modalRating}>
      <StarRatingComponent
        size={20}
        activeColor={'#FCCB00'}
        inActiveColor={'#fff'}
      />
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  _modalRating: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    height: 35,
    width: '38%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-around',
    right: 0,
    flexDirection: 'row',
    borderBottomLeftRadius: 4,
  },
});
