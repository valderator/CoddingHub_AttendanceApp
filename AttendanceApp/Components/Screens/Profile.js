import { StyleSheet, Text, View, Button, Image, Pressable } from "react-native";
import MyFooter from "../Footer";
import Myimage from "../../Images/kindergarten.jpg";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.profileInfo}>
                <Image source={Myimage} style={{width: 150, height: 150, margin: 20}}></Image>
                <Text style={styles.textInfo}>Robert</Text>
                <Text style={styles.textInfo}>Murtaza</Text>
                <Text style={styles.textInfo}>testEmail@gmail.com</Text>
                <Pressable style={({pressed}) => [{backgroundColor: pressed ? 'rgba(106, 125, 150, 1)' : '#dddddd',}, styles.buttonStyle]}>
                    <Text>
                        Change password
                    </Text>
                </Pressable>
                <Pressable style={({pressed}) => [{backgroundColor: pressed ? 'rgba(106, 125, 150, 1)' : '#dddddd',}, styles.buttonStyle]}
                    onPress={() => {alert("Logged out succesfully!"); navigation.navigate('Home')}}>
                    <Text>
                        Logout
                    </Text>
                </Pressable>
            </View>
            <MyFooter />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileInfo:{
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 120,
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        width: '85%',
    },
    textInfo:{
        marginVertical: 5,
        fontSize: 26,
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 3,
        width: '100%',
        textAlign: 'center',
    },
    buttonStyle:{
        padding: 10,
        borderRadius: 5,
        marginTop: 15,
        width: '60%',
        alignItems: 'center',
    },
});