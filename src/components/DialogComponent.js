import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";

import { ConfirmDialog } from "react-native-simple-dialogs";
class DialogComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogVisible: true,
    };
  }
  render() {
    return (
      <>
        <ConfirmDialog
          title="Confirm Dialog"
          message="Are you sure about that?"
          visible={this.state.dialogVisible}
          onTouchOutside={() => this.setState({ dialogVisible: false })}
          positiveButton={{
            title: "YES",
            onPress: () => alert("Yes touched!"),
          }}
          negativeButton={{
            title: "NO",
            onPress: () => alert("No touched!"),
          }}
        />
        <View>
          <TouchableOpacity
            onPress={() =>
              this.setState({ dialogVisible: !this.dialogVisible })
            }
          >
            <Text>Hello</Text>
          </TouchableOpacity>
        </View>
        <ConfirmDialog
          title="Confirm Dialog"
          visible={this.state.dialogVisible}
          onTouchOutside={() => this.setState({ dialogVisible: false })}
          positiveButton={{
            title: "OK",
            onPress: () => alert("Ok touched!"),
          }}
        >
          <View>
            <Text>ieie</Text>
          </View>
        </ConfirmDialog>
      </>
    );
  }
}

export default DialogComponent;
