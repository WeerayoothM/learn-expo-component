import React from "react";
import { Text, View } from "react-native";
import MaskedView from "@react-native-community/masked-view";

export default class MaskedViewComponent extends React.Component {
  render() {
    return (
      <MaskedView
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          borderWidth: 1,
          borderColor: "lime",
        }}
        maskElement={
          <View
            style={{
              // Transparent background because mask is based off alpha channel.
              backgroundColor: "transparent",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "lime",
            }}
          >
            <Text
              style={{
                fontSize: 60,
                color: "black",
                fontWeight: "bold",
              }}
            >
              Basic Mask
            </Text>
          </View>
        }
      >
        {/* Shows behind the mask, you can put anything here, such as an image */}
        <View style={{ flex: 1, backgroundColor: "#324376" }} />
        <View style={{ flex: 1, backgroundColor: "#F5DD90" }} />
        <View style={{ flex: 1, backgroundColor: "#F76C5E" }} />
        <View style={{ flex: 1, backgroundColor: "#e1e1e1" }} />
      </MaskedView>
    );
  }
}
