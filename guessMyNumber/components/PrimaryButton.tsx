import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export interface Props {
  children: React.ReactNode;
}

function pressHandler(data: React.ReactNode) {
  console.log(data);
}
function PrimaryButton(props: Props) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={() => pressHandler(props.children)}
        android_ripple={{ color: "#640233" }}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonContainer: {
    backgroundColor: "#72063c",

    paddingVertical: 8,
    paddingHorizontal: 16,

    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
