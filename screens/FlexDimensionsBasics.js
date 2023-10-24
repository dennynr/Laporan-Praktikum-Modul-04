
import React from "react";
import { View } from "react-native";
import { Button, Text, Flex, Spacer, NativeBaseProvider, Center, Heading, Box } from "native-base";
const FlexDimensionsBasics = () => {
    return (
        // <View style={{ flex: 1 }}>
        //     <View style={{ flex: 1, backgroundColor: "powderblue" }} />
        //     <View style={{ flex: 2, backgroundColor: "skyblue" }} />
        //     <View style={{ flex: 3, backgroundColor: "steelblue" }} />
        // </View>
        <NativeBaseProvider flex="1">
            <Box flex="1" backgroundColor="blue.100" />
            <Box flex="2" backgroundColor="blue.300" />
            <Box flex="3" backgroundColor="blue.500" />
        </NativeBaseProvider>
    );
};

export default FlexDimensionsBasics;



