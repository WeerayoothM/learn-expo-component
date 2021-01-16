import React from "react";
import { View, Text } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export default function AnimateProgressComponent() {
  return (
    <AnimatedCircularProgress
      size={120}
      width={15}
      fill={100}
      tintColor="#00e0ff"
      onAnimationComplete={() => console.log("onAnimationComplete")}
      backgroundColor="#3d5875"
    />
  );
}
