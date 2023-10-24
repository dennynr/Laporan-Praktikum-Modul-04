import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { Box, NativeBaseProvider, Text, VStack, HStack } from "native-base";

const WidthHeightBasics = () => {
  const [widthType, setWidthType] = useState("auto");
  const [heightType, setHeightType] = useState("auto");

  return (
    <NativeBaseProvider>
      <PreviewLayout
        widthType={widthType}
        heightType={heightType}
        widthValues={["auto", 200, "80%"]}
        heightValues={["auto", 200, "60%"]}
        setWidthType={setWidthType}
        setHeightType={setHeightType}
      >
        <Box
          alignSelf="flex-start"
          bgColor="aliceblue"
          height={heightType}
          width={widthType}
          p={15}
        >
          <Box style={[styles.box, { backgroundColor: "powderblue" }]} />
          <Box style={[styles.box, { backgroundColor: "skyblue" }]} />
          <Box style={[styles.box, { backgroundColor: "steelblue" }]} />
        </Box>
      </PreviewLayout>
    </NativeBaseProvider>
  );
};

const PreviewLayout = ({
  children,
  widthType,
  heightType,
  widthValues,
  heightValues,
  setWidthType,
  setHeightType,
}) => (
  <SafeAreaView style={{ flex: 1, padding: 10 }}>
    <HStack space={1}>
      <Text style={styles.label}>width </Text>
      {widthValues.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setWidthType(value)}
          style={[
            styles.button,
            widthType === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              widthType === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </HStack>
    <HStack space={1}>
      <Text style={styles.label}>height </Text>
      {heightValues.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setHeightType(value)}
          style={[
            styles.button,
            heightType === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              heightType === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </HStack>
    {children}
  </SafeAreaView>
);

export default WidthHeightBasics;
