import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';

export class StartRatingComponent extends Component {
  ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
  }

  render() {
    return (
      <View>
        <Rating
          type="heart"
          ratingCount={3}
          imageSize={60}
          showRating
          onFinishRating={this.ratingCompleted}
        />
      </View>
    );
  }
}

export default StartRatingComponent;
