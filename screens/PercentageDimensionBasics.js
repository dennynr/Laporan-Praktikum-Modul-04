
import React from "react";
import { View } from "react-native";
import { Button, Text, Flex, Spacer, NativeBaseProvider, Center, Heading, Box } from "native-base";
const PercentageDimensionsBasics = () => {
  return (
    <NativeBaseProvider height="100%">
      <Box height="15%" background="blue.100" />
      <Box width="66%" height="15%" background="blue.300" />
      <Box width="33%" height="50%" background="blue.500" />
    </NativeBaseProvider>
    // <View style={{ height: "100%" }}>
    //   <View
    //     style={{
    //       height: "15%",
    //       backgroundColor: "powderblue",
    //     }}
    //   />
    //   <View
    //     style={{
    //       width: "66%",
    //       height: "35%",
    //       backgroundColor: "skyblue",
    //     }}
    //   />
    //   <View
    //     style={{
    //       width: "33%",
    //       height: "50%",
    //       backgroundColor: "steelblue",
    //     }}
    //   />
    // </View>
  );
};

export default PercentageDimensionsBasics;



