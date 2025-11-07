import { StyleSheet, View, Text, TextInput, ScrollView } from "react-native";
import MyFooter from "../Footer";
import { useNavigation } from "@react-navigation/native";
import ChildCard from "./ChildCard";
import { useEffect } from "react";

export default function Kindergarten({ route }){

    const navigation = useNavigation();

    const { name, children } = route.params;

    useEffect(() => {
        navigation.setOptions({ title: name });
    });

    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.kindergaternName}>{name}</Text>
                <TextInput style={styles.textInput} placeholder="Search for the child name..."></TextInput>
                {children.map((child, index) => (
                    <ChildCard key={index} name={child} last={index == children.length - 1 ? true : false} />
                ))}
            </ScrollView>
            <MyFooter />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
    },
    scrollView: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'top',
    },
    textInput:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        marginTop: 20,
        paddingLeft: 10,
        width: '85%',
    },
    kindergaternName:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#ffffff',
        backgroundColor: '#140404ff',
        padding: 10,
        borderRadius: 5,
        overflow: 'hidden',
        textAlign: 'center',
        width: '75%',
    },
});