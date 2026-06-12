import { Link, useRouter } from "expo-router";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";

export default function ThirdIndex() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Third Index Screen</Text>
      <Link href='/' asChild style={styles.button} >
        <Button title="Ritorna all'indice (replace) "></Button>
      </Link>
      <Link href='/' dismissTo asChild >
        <Button title="Dismiss to Index" />
      </Link>
      <Link href='/secondIndex' replace asChild >
        <Button title="Replace with /secondIndex" />
      </Link>

      {/* replace — crea nuova istanza di Index, count torna a 0 */}
      {/* <Link href='/' asChild style={styles.button}>
        <Button title="Ritorna all'indice (replace)" />
      </Link> */}

      {/* back() — torna all'istanza già nello stack, count rimane invariato */}
      {/* <Pressable style={styles.button} onPress={() => router.back()}>
        <Text>Torna indietro (back)</Text>
      </Pressable> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: 'rgba(40, 193, 45, 1)',
    gap: 10
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
  }

});