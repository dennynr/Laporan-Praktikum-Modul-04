import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Box, NativeBaseProvider, Text, VStack } from "native-base";
import { View } from "native-base";
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
        <Box style={{ width: 50, height: 50, backgroundColor: "powderblue" }} />
        <Box style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
        <Box style={{ width: 50, height: 50, backgroundColor: "steelblue" }} />
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
    <VStack direction="row" flexWrap="wrap">
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={{
            paddingHorizontal: 8,
            paddingVertical: 6,
            borderRadius: 4,
            backgroundColor: selectedValue === value ? "coral" : "oldlace",
            alignSelf: "flex-start",
            marginHorizontal: "1%",
            marginBottom: 6,
            minWidth: "48%",
            textAlign: "center",
          }}
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
    </VStack>
    <Box flex={1} mt={8} bgColor="aliceblue">
      {children}
    </Box>
  </VStack>
);

export default FlexDirectionBasics;
