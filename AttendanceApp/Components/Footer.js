import { StyleSheet, View } from "react-native";
import HomeButton from "./Buttons/HomeButton";
import ProfileButton from "./Buttons/ProfileButton";

export default function MyFooter(){
    return(
        <View style={styles.footer}>
            <HomeButton/>
            <ProfileButton/>
        </View>
    );
}

const styles = StyleSheet.create({
  footer:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  footerItem:{
    flexDirection: 'column',
    alignItems: 'flex-start',
  }
});