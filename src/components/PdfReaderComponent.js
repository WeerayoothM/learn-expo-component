import * as React from "react";
import { View } from "react-native";
import PDFReader from "rn-pdf-reader-js";

export default class PdfReaderComponent extends React.Component {
  render() {
    return (
      <PDFReader
        source={{
          uri: "http://gahp.net/wp-content/uploads/2017/09/sample.pdf",
        }}
      />
    );
  }
}
