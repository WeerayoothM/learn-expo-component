import RangeSlider, { Slider } from "react-native-range-slider-expo";

import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const MultiSliderComponent = () => {
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <View style={{ width: 300, height: 800, marginTop: 100 }}>
      <View>
        <Text style={{ textAlign: "center", color: "#00D0AA" }}>
          {fromValue} - {toValue} ปี
        </Text>

        <RangeSlider
          min={10}
          max={100}
          fromValueOnChange={(value) => setFromValue(value)}
          toValueOnChange={(value) => setToValue(value)}
          styleSize="small"
          inRangeBarColor="#00D0AA"
          fromKnobColor="#F8F8F8"
          toKnobColor="#F8F8F8"
          valueLabelsBackgroundColor="#00D0AA"
          outOfRangeBarColor="#EAEAEA"
          showRangeLabels={false}
          showValueLabels={true}
          //   initialFromValue={5}
        />
      </View>
      <View>
        <Slider
          min={0}
          max={40}
          step={4}
          valueOnChange={(value) => setValue(value)}
          initialValue={12}
          knobColor="red"
          valueLabelsBackgroundColor="black"
          inRangeBarColor="purple"
          outOfRangeBarColor="orange"
        />
        <Text>value: {value}</Text>
      </View>
    </View>
  );
};

export default MultiSliderComponent;

const styles = StyleSheet.create({});
