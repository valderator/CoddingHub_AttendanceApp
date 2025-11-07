import { ScrollView, StatusBar, StyleSheet, TextInput, View } from "react-native";
import MyFooter from "../Footer";
import KindergartenBanner from "./KindergartenBanner"
import { useNavigation } from "@react-navigation/native";

export default function HomePage(){

    const kindergartens = [
      {name: "Kindergarten name", children: ["Child 1", "Child 2", "Child 3"]}, 
      {name: "Kindergarten name2", children: ["Child A", "Child B"]},
      {name: "Kindergarten name3", children: ["Child X", "Child Y", "Child Z", "Child W", "Child V", "Child U", "Child T"]},
      {name: "Kindergarten name4", children: ["Child Alpha", "Child Beta"]},
      {name: "Kindergarten name5", children: ["Child Uno", "Child Dos", "Child Tres"]}
    ];

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <TextInput style={styles.textInput} placeholder="Search for kindergarten name..."></TextInput>

                {kindergartens.map((kindergarten, index) => (
                    <KindergartenBanner 
                      key={index} 
                      name={kindergarten.name} 
                      last={index == kindergartens.length - 1 ? true : false} 
                      navigateTo={() => {
                        navigation.navigate('Kindergarten', {name: kindergarten.name, children: kindergarten.children})
                      }
                    }/>
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
