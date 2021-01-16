import React from "react";
import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";

const SliderComponent = () => {
  return (
    <Slider
      style={{ width: 200, height: 40 }}
      minimumValue={0}
      maximumValue={5}
      //   step={1}
      onValueChange={(value) => console.log(value)}
      minimumTrackTintColor="#3399ff"
      maximumTrackTintColor="#000000"
    />
  );
};

export default SliderComponent;
