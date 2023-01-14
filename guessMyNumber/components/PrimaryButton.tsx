import React from "react";
import { View, Text, Pressable } from "react-native";

export interface Props {
  children: React.ReactNode;
}

function pressHandler(data: React.ReactNode) {
  console.log(data);
}
function PrimaryButton(props: Props) {
  return (
    <Pressable onPress={() => pressHandler(props.children)}>
      <View>
        <Text>{props.children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;
