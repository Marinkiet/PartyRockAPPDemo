import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const primaryPurple = "#e4d7ff";
const secondaryPurple="#b698fe";
const backgroundGrey="#f1f8fb";
const primaryOrang="#ffdfaf";
const secondaryOrange="#f1864c";

const TitleCard = (props,{navigation}) => {
   
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Home')}>
      <View>
      <MaterialCommunityIcons name={props.subjectIcon} size={35} color={primaryPurple}/>
      </View>
      <View  style={styles.subjectTextWrapper}>
        <Text  style={styles.subjectText}>{props.subjectName}</Text>
        </View>
    </TouchableOpacity>
  );
};

export default TitleCard;

const styles = StyleSheet.create({
    container:{
        width:100,
        height:100,
        backgroundColor:secondaryPurple,
        opacity:1,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        margin:10
    },
    subjectLogo:{
        width:35,
        height:35,
        objectFit:'contain'
    },
    subjectTextWrapper:{
        borderTopWidth:1,
        borderTopColor:primaryOrang,
        borderTopWidth:1,
        marginTop:15
    },
    subjectText:{
        fontSize:16,
        paddingTop:2,
        color:'white'
    }
});
