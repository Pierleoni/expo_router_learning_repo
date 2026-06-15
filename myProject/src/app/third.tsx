import { Link, useRouter } from "expo-router";
import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import ProverbsScreen, { proverbs } from "../(stackNavigator)/proverbs/[id]";
import ProverbList from "../components/ProverbList";

export default function ThirdScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Index Screen</Text>
      <Pressable style={styles.btnBack} onPress={() => router.back()}>
        <Text>Back</Text>
      </Pressable>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    gap: 16,

  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: '#155cc7c4',
    borderRadius: 10,
    paddingVertical: 5,
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: 14,
    marginHorizontal: 50,

  },
  btnBack: {
    backgroundColor: '#e6dbdb9e',
    borderRadius: 10,
    paddingVertical: 5,
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: 14,
    marginHorizontal: 50,
  },
  textBtn: {
    fontWeight: 'bold',
    color: '#a73d3da4'
  },
  txt: {
    fontWeight: 'bold',
    textAlign: 'center',

  },
  txtError: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(192, 43, 16, 1)'
  }
});