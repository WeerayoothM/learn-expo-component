import React from "react";
import { Picker } from "@react-native-community/picker";

const PickerComponent = () => {
  const [language, setLanguage] = React.useState("Java");

  return (
    <Picker
      selectedValue={language}
      style={{ height: 50, width: "100%" }}
      onValueChange={(itemValue) => setLanguage(itemValue)}
    >
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  );
};

export default PickerComponent;
