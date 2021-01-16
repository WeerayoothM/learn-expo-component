import React from "react";
import { View, Text } from "react-native";
import {
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
const TouchableComponent = () => {
  return (
    <View>
      <TouchableNativeFeedback>
        <Text>NativeFeedback</Text>
      </TouchableNativeFeedback>
      <TouchableHighlight>
        <Text>highlight</Text>
      </TouchableHighlight>
      <TouchableOpacity>
        <Text>Opacity</Text>
      </TouchableOpacity>
      <TouchableWithoutFeedback>
        <Text>withoutFeedback</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default TouchableComponent;
