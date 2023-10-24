
import React from "react";
import { StyleSheet, View } from "react-native";
import { Flex, Spacer } from "native-base";
import { Box, NativeBaseProvider } from "native-base"
const FlexBasic = () => {
  return (
    <NativeBaseProvider >
      <Box flex="1" padding="5" flexDirection="column">
        <Box flex="1" backgroundColor="red.500" />
        <Box flex="2" backgroundColor="orange.500" />
        <Box flex="3" backgroundColor="green.500" />
      </Box>
    </NativeBaseProvider>
    // <View style={[styles.container, { flexDirection: "column" }]}>
    //   <View style={{ flex: 1, backgroundColor: "red" }} />
    //   <View style={{ flex: 2, backgroundColor: "darkorange" }} />
    //   <View style={{ flex: 3, backgroundColor: "green" }} />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default FlexBasic;



