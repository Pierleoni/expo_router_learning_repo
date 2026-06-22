
import { Alert, Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
// import ProverbsScreen, { proverbs } from "../(stackNavigator)/proverbs/[id]";
// import ProverbList from "../components/ProverbList";
// src\app\(protected)\(tabs)\(home)\index.tsx
// (protected)\(tabs)\(home)\index.tsx
import { Link, useRouter } from "expo-router";
import { useState } from "react";

export default function IndexScreen() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const canGoBack = router.canGoBack()
  const handleOpenAlert = () => {
    Alert.alert('Warning!', 'Are you sure you want to proceed?', [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      {
        text: 'Confirm',
        style: 'destructive',
        onPress: () => {
          console.log("Let's go!")
        }
      }
    ])
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Index Screen</Text>
      <Pressable style={styles.button} onPress={() => router.push('/home-nested')}>
        <Text>Push to the nested home </Text>
      </Pressable>

      {canGoBack ? (
        <Pressable style={styles.btnBack} onPress={() => router.back()}>
          <Text>Back</Text>
        </Pressable>) : null}
      <Pressable style={styles.btnAlert} onPress={handleOpenAlert}>
        <Text style={styles.txt}>Open Alert</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Text>Apri modale</Text>
      </Pressable>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        // transparent; stessa cosa a scrivere transparent={true}
        // presentationStyle="pageSheet"
        onRequestClose={() => setModalVisible(false)}

      >
        <View style={styles.modalOuter}>
          <View style={styles.modalInner}>
            <Text>A custom styled modal!</Text>
            <Pressable style={styles.button} onPress={() => setModalVisible(false)}>
              <Text style={styles.textBtn}>Chiudi</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Link href='/modal' push asChild>
        <Button title='Open router Modal' />
      </Link>
      <Link href='/model-with-stack' push asChild>
        <Button title="Apri la Router Modal" />
      </Link>
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
  btnBack: {
    backgroundColor: '#e6dbdb9e',
    borderRadius: 10,
    paddingVertical: 5,
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: 14,
    marginHorizontal: 50,
  },
  txt: {
    fontWeight: 'bold',
    textAlign: 'center',

  },
  txtError: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(192, 43, 16, 1)'
  },
  btnAlert: {
    backgroundColor: '#ce1a1aff',
    borderRadius: 10,
    paddingVertical: 5,
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: 14,
    marginHorizontal: 50,
  },
  modalOuter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalInner: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    gap: 12,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
});