import React, { Component } from "react";
import { View, Text } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

const VictoryNativeComponent = ({
  ages = [23, 24, 17, 30, 29, 29, 39, 25, 25, 25, 24, 26],
}) => {
  const sumValue = Object.values(ages).reduce((a, b) => a + b, 0);

  const value = Object.values(ages).map((age) => {
    return Math.round((age / sumValue) * 100);
  });

  value.sort((a, b) => a < b);

  const data = Object.keys(ages).map((key, index) => {
    return {
      age: key,
      value: ages[key],
    };
  });

  return (
    <View
      style={{
        padding: 15,
        borderBottomWidth: 1,
        borderColor: "#E3E3E3",
      }}
    >
      <Text style={{ fontFamily: "roboto" }}>Age range (%)</Text>
      <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
        <VictoryBar
          style={{ data: { fill: "#c43a31" } }}
          data={data}
          x="age"
          y="value"
        />
      </VictoryChart>
      <VictoryChart
        style={{ parent: { marginTop: -30 } }}
        height={250}
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryBar
          domain={{ y: [0, 100] }}
          style={{
            data: {
              fill: ({ datum }) => {
                if (datum.value === value[0]) {
                  return "#723C98";
                }
                if (datum.value === value[1]) {
                  return "#BC83E5";
                }
                return "#D7B4F0";
              },
              width: 35,
            },
          }}
          labels={({ datum }) => `${datum.value}%`}
          data={data}
          x="age"
          y="value"
        />
      </VictoryChart>
    </View>
  );
};

export default VictoryNativeComponent;
