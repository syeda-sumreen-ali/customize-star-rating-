import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class StarRatingComponent extends Component {
  state = {
    stars: 0,
  };
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Stars
          rating={this.state.stars}
          count={5}
          half={true}
          update={(val) => {
            this.setState({stars: val});
          }}
          fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
          emptyStar={
            <Icon
              name={'star-outline'}
              style={[styles.myStarStyle, styles.myEmptyStarStyle]}
            />
          }
          halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
    fontSize: 50,
  },
  myEmptyStarStyle: {
    color: 'white',
    fontSize: 50,
  },
});

export default StarRatingComponent;
