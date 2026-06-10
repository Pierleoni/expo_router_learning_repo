import { Link, useRouter } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function HomeScreen() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Index Screen</Text>


      <Link href="/secondIndex" push asChild>
        <Pressable style={styles.button} >
          <Text>Push to second</Text>

        </Pressable>
      </Link>

      <Pressable style={styles.button} onPress={() => {
        router.push("/fourthIndex")
      }}>
        <Text style={styles.textBtn}>Push to third</Text>
      </Pressable>
      <Link href='/fourthIndex' push asChild>
        <Pressable style={styles.button} >
          <Text>Push to fourth</Text>
        </Pressable>
      </Link>
      <Link href='/fifth/sixth' push asChild>
        <Pressable style={styles.button}>

          <Text style={styles.textBtn} >Pust to the Nasty Deep</Text>
        </Pressable>
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    gap: 16
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
  textBtn: {
    fontWeight: 'bold',
    color: '#a73d3da4'
  }
});