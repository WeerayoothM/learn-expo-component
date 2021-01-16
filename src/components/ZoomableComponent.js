import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ReactNativeZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView";
import { TouchableOpacity } from "react-native-gesture-handler";

const ZoomableComponent = () => {
  return (
    <View style={{ height: "100%", width: "100%", backgroundColor: "black" }}>
      <View style={{ position: "absolute", top: 20, left: 20 }}>
        <TouchableOpacity>
          <Text style={{ color: "white" }}>X</Text>
        </TouchableOpacity>
      </View>
      <ReactNativeZoomableView
        maxZoom={1.5}
        minZoom={1}
        zoomStep={0.5}
        initialZoom={1}
        captureEvent={true}
        // bindToBorders={true}
        //  onZoomAfter={this.logOutZoomState}
      >
        <Image
          source={require("../../assets/images/burger-restaurant-2.jpg")}
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            resizeMode: "contain",
          }}
        />
      </ReactNativeZoomableView>
    </View>
  );
};

export default ZoomableComponent;

const styles = StyleSheet.create({});
