import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../Screens/HomePage";
import Profile from "../Screens/Profile";

const RootStack = createNativeStackNavigator(
    {
        screens:{
            Home: {
                screen: HomePage,
                options: { 
                    headerShown: false,
                },
            },
            Profile: {
                screen: Profile,
            },
        },
    }
);

const Navigation = createStaticNavigation(RootStack);

export default function MyNavigation(){
    return(
        <Navigation/>
    );
}