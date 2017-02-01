import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

export default class MyScene extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>{this.props.menu_name}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

MyScene.propTypes = {
  menu_name: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};