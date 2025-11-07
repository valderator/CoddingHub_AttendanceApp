import { Button, Image, StyleSheet, Text, View } from "react-native";
import image from "../../Images/kindergarten.jpg";

export default function ChildCard(props) {
    return (
        <View style={props.last ? styles.cardLast : styles.card}>
            <Image source={image} style={{width: 50, height: 50}} />
            <View style={styles.childPhoto}>
                <Text>{props.name}</Text>
            </View>
            <View style={styles.buttons}>
                <Button title="A"></Button>
                <Button title="P"></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderWidth: 10,
        borderColor: '#ddd',
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    cardLast: {
        padding: 10,
        marginBottom: 100,
        marginVertical: 8,
        marginHorizontal: 16,
        borderWidth: 10,
        borderColor: '#ddd',
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    buttons: {
        flexDirection: 'row',
        gap: 30,
        marginRight: 10,
    },
    childPhoto: {
        flex: 1, 
        marginLeft: 20,
    },
});