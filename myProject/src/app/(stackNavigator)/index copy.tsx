import { Link, useRouter } from "expo-router";
import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import ProverbsScreen, { proverbs } from "./proverbs/[id]";
import ProverbList from "../../components/ProverbList";

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
      <Pressable style={styles.button} onPress={() => { router.push('/fifth') }}>
        <Text>Push to fifth</Text>
      </Pressable>
      <Link href={{ pathname: '/secondIndex', params: { name: 'Marco' } }} push asChild>
        <Button title="Push another time to /secondIndex" color='#1c3ed3c8' />
      </Link>
      <Button title="Another greeting message" color='#1c3ed3c8' onPress={() => router.push({ pathname: '/secondIndex', params: { name: 'Mary' } })} />
      <Link href='/proverbs/1' push asChild>
        <Button title="Push to /proverb/1"></Button>
      </Link>
      <Link href={{ pathname: '/proverbs/[id]', params: { id: '2' } }} push asChild >
        <Button title="push to /proverb/2" />
      </Link>
      <View style={{ flex: 1, width: '100%' }}>
        {/* {proverbs.map(p => (
          <Link href={{ pathname: '/proverbs/[id]', params: { id: p.id } }} push asChild>
            <Button title="show all /proverbs/" />
          </Link>
        ))} */}
        <Link href='/products/shoes/1234' push asChild>
          <Button title="push to /products" />
        </Link>
        {/* <ProverbList /> */}
      </View>
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