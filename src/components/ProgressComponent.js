import React from "react";
import { View, Text } from "react-native";
import * as Progress from "react-native-progress";

const ProgressComponent = () => {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    setInterval(() => setProgress((prev) => prev + 0.1), 1000);
  }, []);
  return (
    <View style={{ paddingTop: 0 }}>
      <Progress.Bar
        color="#8ADED0"
        unfilledColor="#EAEAEA"
        progress={progress}
        width={null}
        height={12}
      />
    </View>
  );
};

export default ProgressComponent;
