
import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import { Button, Text, Flex, Spacer, NativeBaseProvider, Center, Heading, Box } from "native-base";
const LotsOfStyles = () => {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.red}>just red</Text>
    //   <Text style={styles.bigBlue}>just bigBlue</Text>
    //   <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
    //   <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
    //   <Button />
    // </View>
    <NativeBaseProvider >
      <Box p="15">
        <Text fontSize="md" color="red.700" >just red</Text>
        <Text bold fontSize="3xl" color="blue.800">just bigBlue</Text>
        <Text bold fontSize="3xl" color="red.700" >bigBlue, then red</Text>
        <Text bold fontSize="3xl" color="blue.800">red, then bigBlue</Text>
      </Box>

    </NativeBaseProvider>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     padding: 15,
//   },
//   bigBlue: {
//     color: "blue",
//     fontWeight: "bold",
//     fontSize: 30,
//   },
//   red: {
//     color: "red",
//   },
// });

export default LotsOfStyles;



