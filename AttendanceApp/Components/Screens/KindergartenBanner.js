import { ImageBackground, Pressable, StyleSheet, Text } from "react-native";
import image from "../../Images/kindergarten.jpg";

export default function KindergartenBanner(props){
    return(
        <Pressable style={props.last ? styles.viewLast : styles.view} onPress={props.navigateTo}>
            <ImageBackground source={image} style={{width: 320, height: 150, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: "white", fontSize: 24}} >{props.name}</Text>
            </ImageBackground>
        </Pressable>
    );
}

const styles = StyleSheet.create(
    {
        view:{
            padding: 10,
        },
        viewLast:{
            padding: 10,
            paddingBottom: 100,
        }
    },
);