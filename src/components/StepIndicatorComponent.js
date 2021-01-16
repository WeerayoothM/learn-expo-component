import StepIndicator from "react-native-step-indicator";
import React, { useState } from "react";
import { View, Text } from "react-native";

const labels = [
  "Cart",
  "Delivery Address",
  "Order Summary",
  "Payment Method",
  "Track",
];
const customStyles = {
  stepIndicatorSize: 14,
  currentStepIndicatorSize: 26,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 1,
  stepStrokeCurrentColor: "#00D0AA",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#00D0AA",
  stepStrokeUnFinishedColor: "#E5E5E5",
  separatorFinishedColor: "#00D0AA",
  separatorUnFinishedColor: "#E5E5E5",
  stepIndicatorFinishedColor: "#00D0AA",
  stepIndicatorUnFinishedColor: "#E5E5E5",
  stepIndicatorCurrentColor: "#fff",
  currentStepLabelColor: "#00D0AA",
};

function StepIndicatorComponent() {
  const [currentPosition, setCurrentPosition] = useState(3);

  const onPageChange = (position) => {
    setCurrentPosition(position);
  };
  return (
    <StepIndicator
      customStyles={customStyles}
      currentPosition={currentPosition}
      stepCount={6}
      renderStepIndicator={({ position, stepStatus }) => {
        console.log(position, stepStatus);
        if (stepStatus === "current") {
          return (
            <Text style={{ color: "#00D0AA", fontWeight: "bold" }}>
              {position + 1}
            </Text>
          );
        } else {
          return;
        }
      }}
    />
  );
}
export default StepIndicatorComponent;
