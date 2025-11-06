import { ScrollView, StatusBar, StyleSheet, TextInput, View } from "react-native";
import MyFooter from "../Footer";
import KindergartenBanner from "./KindergartenBanner"
import { useNavigation } from "@react-navigation/native";

export default function HomePage(){

    const kindergartens = ["Kindergarten name", "Kindergarten name2", "Kindergarten name3", "Kindergarten name4", "Kindergarten name5"];

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <TextInput style={styles.textInput} placeholder="Search for kindergarten name..."></TextInput>

                {kindergartens.map((name, index) => (
                    <KindergartenBanner 
                      key={index} 
                      name={name} 
                      last={index == kindergartens.length - 1 ? true : false} 
                      navigateTo={() => navigation.navigate('Profile')}/>
                ))}

            </ScrollView>
            <MyFooter/>

        </View>
    );
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
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
});
