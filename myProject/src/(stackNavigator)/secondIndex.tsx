import { View, Text, StyleSheet, Button } from "react-native";
import { Link, useLocalSearchParams, useRouter } from "expo-router";

export default function SecondIndex() {
  const params = useLocalSearchParams<{ name: string }>();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Second Index Screen</Text>
      {params.name ?
        (<Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Hello <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{params.name}!</Text> </Text>) : null}
      <Link style={styles.button} href='/third' push asChild>
        <Button title="Push to Third" />
      </Link>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: 'rgba(19, 157, 216, 1)'
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
});