
import React from "react";
import { View } from "react-native";
import { Button, Text, Flex, Spacer, NativeBaseProvider, Center, Heading, Box } from "native-base";
const FixedDimensionsBasics = () => {
  return (
    <NativeBaseProvider>
      <Box width="50" height="50" backgroundColor="blue.100" />
      <Box width="100" height="100" backgroundColor="blue.300" />
      <Box width="150" height="150" backgroundColor="blue.500" />
    </NativeBaseProvider>
    // <View>
    //   <View
    //     style={{
    //       width: 50,
    //       height: 50,
    //       backgroundColor: "powderblue",
    //     }}
    //   />
    //   <View
    //     style={{
    //       width: 100,
    //       height: 100,
    //       backgroundColor: "skyblue",
    //     }}
    //   />
    //   <View
    //     style={{
    //       width: 150,
    //       height: 150,
    //       backgroundColor: "steelblue",
    //     }}
    //   />
    // </View>
  );
};

export default FixedDimensionsBasics;



