import { StyleSheet, View } from "react-native";
import NewFile from "./components/NewFile";

export default function App() {
  return (
    <View style={styles.container}>
      <NewFile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
