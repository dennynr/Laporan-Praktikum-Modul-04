import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Box, NativeBaseProvider, Text, VStack, HStack } from "native-base";

const FlexDirectionBasics = () => {
  const [flexDirection, setflexDirection] = useState("column");

  return (
    <NativeBaseProvider>
      <PreviewLayout
        label="flexDirection"
        values={["column", "row", "row-reverse", "column-reverse"]}
        selectedValue={flexDirection}
        setSelectedValue={setflexDirection}
      >
        <Box w={50} h={50} bgColor="powderblue" />
        <Box w={50} h={50} bgColor="skyblue" />
        <Box w={50} h={50} bgColor="steelblue" />
      </PreviewLayout>
    </NativeBaseProvider>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <VStack p={10} flex={1}>
    <Text fontSize={24} mb={10} textAlign="center">
      {label}
    </Text>
    <HStack space={1} flexWrap="wrap">
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          _pressed={{
            bgColor: "coral",
          }}
          _light={{
            bgColor: selectedValue === value ? "coral" : "oldlace",
          }}
          alignSelf="flex-start"
          m={1}
          p={2}
          borderRadius={4}
          minWidth="48%"
          textAlign="center"
        >
          <Text
            fontSize={12}
            fontWeight={selectedValue === value ? "bold" : "500"}
            color={selectedValue === value ? "white" : "coral"}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </HStack>
    <Box flex={1} mt={8} bgColor="aliceblue">
      {children}
    </Box>
  </VStack>
);

export default FlexDirectionBasics;
