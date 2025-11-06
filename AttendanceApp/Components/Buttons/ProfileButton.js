import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export default function ProfileButton() {

    const navigation = useNavigation();

    return (
        <IconButton icon={props => <Icon name="account" {...props}/>} contentContainerStyle={style.button}
                    onPress={() => navigation.navigate('Profile')}>
        </IconButton>
    );
}

const style = StyleSheet.create({
    button:{
        backgroundColor: '#618fe6ff',
    },
});