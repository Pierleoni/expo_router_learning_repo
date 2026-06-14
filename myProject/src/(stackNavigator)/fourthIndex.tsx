import { View, Text, StyleSheet } from "react-native";

export default function FourthIndex() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Fourth Index Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});