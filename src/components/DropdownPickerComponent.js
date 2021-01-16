import React from "react";
import { View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";
const DropdownPickerComponent = () => {
  const [country, setCountry] = React.useState("uk");
  const [countries, setCountries] = React.useState("uk");
  return (
    <>
      <DropDownPicker
        items={[
          {
            label: "USA",
            value: "usa",
            icon: () => <Icon name="flag" size={18} color="#900" />,
            hidden: true,
          },
          {
            label: "UK",
            value: "uk",
            icon: () => <Icon name="flag" size={18} color="#900" />,
          },
          {
            label: "France",
            value: "france",
            icon: () => <Icon name="flag" size={18} color="#900" />,
          },
        ]}
        searchable={true}
        searchablePlaceholder="Search for an item"
        searchablePlaceholderTextColor="gray"
        seachableStyle={{}}
        searchableError={() => <Text>Not Found</Text>}
        defaultValue={country}
        containerStyle={{ height: 40 }}
        style={{ backgroundColor: "#fafafa" }}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        dropDownStyle={{ backgroundColor: "#fafafa" }}
        onChangeItem={(item) => setCountry(item.value)}
      />
      {/* <DropDownPicker
        items={[
          {
            label: "UK",
            value: "uk",
            icon: () => <Icon name="flag" size={18} color="#900" />,
          },
          {
            label: "France",
            value: "france",
            icon: () => <Icon name="flag" size={18} color="#900" />,
          },
        ]}
        multiple={true}
        multipleText="%d items have been selected."
        min={0}
        max={1}
        defaultValue={countries}
        containerStyle={{ height: 40 }}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        onChangeItem={(item) => setCountries(item.value)}
      /> */}
    </>
  );
};

export default DropdownPickerComponent;
