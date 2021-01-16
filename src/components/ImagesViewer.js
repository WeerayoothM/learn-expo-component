import React from "react";
import { SafeAreaView } from "react-native";
import { Modal, Text, Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ImageViewer from "react-native-image-zoom-viewer";

// const images = [
//   {
//     // Simplest usage.
//     // url: "",
//     props: {
//       source: require("../../assets/images/honey-mustard-chicken-burger.jpg"),
//     },

//     // width: number
//     // height: number
//     // Optional, if you know the image size, you can set the optimization performance

//     // You can pass props to <Image />.
//   },
//   {
//     // url: "",
//     props: {
//       // Or you can set source directory.
//       source: require("../../assets/images/baked-fries.jpg"),
//     },
//   },
// ];

const images = [
  { url: "https://storage.googleapis.com/rabbitx/1610448099084photo.jpg" },
  { url: "https://storage.googleapis.com/rabbitx/1610448179304photo.jpg" },
];

const ImagesViewer = () => {
  const [visibleModal, setVisibleModal] = React.useState(false);
  return (
    <>
      <View style={{ flex: 1, alignItems: "center" }}>
        <TouchableOpacity onPress={() => setVisibleModal(true)}>
          <Image
            source={require("../../assets/images/noodle-shop.jpg")}
            style={{ width: 100, height: 100 }}
          />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        visible={visibleModal}
        transparent={true}
        style={{ flex: 1, backgroundColor: "white" }}
      >
        <ImageViewer
          imageUrls={images}
          enableSwipeDown={true}
          onSwipeDown={() => {
            setVisibleModal(false);
          }}
          index={0}
          swipeDownThreshold={150}
        />
      </Modal>
    </>
  );
};

export default ImagesViewer;
