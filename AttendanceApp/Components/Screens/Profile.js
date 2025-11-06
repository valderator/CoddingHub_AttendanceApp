import { StyleSheet, Text, View, StatusBar } from "react-native";
import MyFooter from "../Footer";

export default function Profile() {
    return (
        <View style={styles.container}>
            <MyFooter />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight || 0,
    },
});