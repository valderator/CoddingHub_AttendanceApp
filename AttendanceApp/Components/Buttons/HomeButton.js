import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeButton() {

    const navigation = useNavigation();

    return (
        <IconButton icon={props => <Icon name="home" {...props}/>} contentContainerStyle={style.button}
            onPress={() => navigation.navigate('Home')}>
        </IconButton>
    );
}

const style = StyleSheet.create({
    button:{
        backgroundColor: '#618fe6ff',
    },
});