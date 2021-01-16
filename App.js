import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import PickerComponent from "./src/components/PickerComponent";
import SliderComponent from "./src/components/SliderComponent";
import * as Device from "expo-device";
import ImagePicker from "expo-image-picker";
import CalendarComponent from "./src/components/CalendarComponent";
import AnimateProgressComponent from "./src/components/AnimateProgressComponent";
import DropdownPickerComponent from "./src/components/DropdownPickerComponent";
import TouchableComponent from "./src/components/TouchableComponent";
import VictoryNativeComponent from "./src/components/VictoryNaitveComponent";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import ProgressComponent from "./src/components/ProgressComponent";
import DialogComponent from "./src/components/DialogComponent";
import TabViewComponent from "./src/components/TabViewComponent";
import WebViewComponent from "./src/components/WebViewComponent";
import PdfReaderComponent from "./src/components/PdfReaderComponent";
import ZoomableComponent from "./src/components/ZoomableComponent";
import ImagesViewer from "./src/components/ImagesViewer";
import StepIndicatorComponent from "./src/components/StepIndicatorComponent";
import MultiSliderComponent from "./src/components/MultiSliderComponent";

export default function App() {
  return (
    <SafeAreaView style={{ ...styles.container }}>
      <MultiSliderComponent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
