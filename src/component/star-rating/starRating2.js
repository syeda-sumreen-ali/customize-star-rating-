import React, {Component} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import {View, TouchableWithoutFeedback, Text} from 'react-native';

class StarRatingComponent extends Component {
  state = {
    starCount: 1,
    arrayCount: [1, 0, 0, 0, 0],
  };

  onStarPress = (val, i) => {
    let {arrayCount} = this.state;
    for (let index = 0; index < arrayCount.length; index++) {
      if (index === i) {
        //check if the previous stars are not filled filled them completely
        if (arrayCount[index - 1] < 1) {
          //   console.log(index, arrayCount[index]);
          let temp = index;

          //   console.log(temp);
          for (let j = 0; j < temp; j++) {
            arrayCount[j] = 1;
            console.log(arrayCount[j]);
          }
        }

        //check if the next stars are  filled make it empty
        if (arrayCount[index + 1] >= 1) {
          //   console.log(index, arrayCount[index]);
          let temp2 = index;

          console.log("I'm Temp 2", temp2);

          for (let k = arrayCount.length - 1; k > temp2; k--) {
            arrayCount[k] = 0;
            // console.log(arrayCount[k]);
          }
        }
        if (arrayCount[index] < 1) {
          arrayCount[index] = arrayCount[index] + 0.5;
        } else {
          arrayCount[index + 1] = 0;
        }
      }

      //   console.log(arrayCount);
    }

    // sum of all stars
    console.log('press', this.state.arrayCount);
    var sum = this.state.arrayCount.reduce(function (a, b) {
      return a + b;
    }, 0);

    this.setState({
      arrayCount: this.state.arrayCount,
      starCount: sum,
    });
  };

  render() {
    console.log(this.state.starCount);
    let {arrayCount, starCount} = this.state;

    return (
      <>
        <View
          style={{
            // padding: '20%',
            flexDirection: 'row',
          }}>
          <View
            style={{
              // backgroundColor: 'red',
              flexDirection: 'row',
              position: 'absolute',
            }}>
            {arrayCount.map(
              (item, index) =>
                index < 5 && (
                  <Icon
                    name="star"
                    size={this.props.size}
                    color={this.props.inActiveColor}
                  />
                ),
            )}
          </View>
          {arrayCount.map(
            (item, index) =>
              index < 5 && (
                <TouchableWithoutFeedback
                  // color="#f2f2f2"
                  key={index}
                  onPress={() => this.onStarPress(arrayCount[index], index)}
                  style={
                    arrayCount[index] === 0 && {
                      paddingLeft: 100,
                      backgroundColor: 'red',
                    }
                  }>
                  {arrayCount[index] === 0 ? (
                    <Icon
                      name="star"
                      size={this.props.size}
                      color={this.props.inActiveColor}
                    />
                  ) : arrayCount[index] === 0.5 ? (
                    <Icon
                      name="star-half-empty"
                      size={this.props.size}
                      color={this.props.activeColor}
                    />
                  ) : (
                    <Icon
                      name="star"
                      size={this.props.size}
                      color={this.props.activeColor}
                    />
                  )}
                </TouchableWithoutFeedback>
              ),
          )}
        </View>
      </>
    );
  }
}

export default StarRatingComponent;
