import { AuthContext } from "@/utils/authContext";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function FourthScreen() {
  const authState = useContext(AuthContext)
  const router = useRouter()


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Index Screen</Text>
      <Pressable style={styles.btnBack} onPress={() => router.back()}>
        <Text>Back</Text>
      </Pressable>
      <Pressable style={styles.btnLogOut} onPress={authState.logOut}>
        <Text style={styles.textBtn}>Log Out</Text>
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
  btnLogOut: {
    backgroundColor: 'rgba(172, 16, 45, 0.68)',
    borderRadius: 10,
    paddingVertical: 5,
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: 14,
    marginHorizontal: 50,
  },
  textBtn: {
    fontWeight: 'bold',
    color: '#e1d8d8a4'
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