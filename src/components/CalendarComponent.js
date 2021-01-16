import React from "react";
import { View, Text } from "react-native";
import { Calendar } from "react-native-calendars";

const CalendarComponent = () => {
  return (
    <>
      <View>
        <Calendar
          current={"2021-01-05"}
          // Collection of dates that have to be colored in a special way. Default = {}
          markedDates={{
            "2021-01-20": { textColor: "green" },
            "2021-01-22": { startingDay: true, color: "green" },
            "2021-01-23": {
              selected: true,
              endingDay: true,
              color: "green",
              textColor: "gray",
            },
            "2021-01-04": {
              disabled: true,
              startingDay: true,
              color: "green",
              endingDay: true,
            },
          }}
          // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
          markingType={"period"}
        />
      </View>
      <View>
        <Calendar
          markingType={"period"}
          markedDates={{
            "2021-01-15": { marked: true, dotColor: "#50cebb" },
            "2021-01-16": { marked: true, dotColor: "#50cebb" },
            "2021-01-21": {
              startingDay: true,
              color: "#50cebb",
              textColor: "white",
            },
            "2021-01-22": { color: "#70d7c7", textColor: "white" },
            "2021-01-23": {
              color: "#70d7c7",
              textColor: "white",
              marked: true,
              dotColor: "white",
            },
            "2021-01-24": { color: "#70d7c7", textColor: "white" },
            "2021-01-25": {
              endingDay: true,
              color: "#50cebb",
              textColor: "white",
            },
          }}
        />
      </View>
    </>
  );
};

export default CalendarComponent;
