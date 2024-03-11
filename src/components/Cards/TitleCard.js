import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const TitleCard = (props) => {
   
  return (
    <View style={styles.container}>
      <View>
      <MaterialCommunityIcons name={props.subjectIcon} size={35}/>
      </View>
      <View  style={styles.subjectTextWrapper}>
        <Text  style={styles.subjectText}>{props.subjectName}</Text>
        </View>
    </View>
  );
};

export default TitleCard;

const styles = StyleSheet.create({
    container:{
        width:100,
        height:100,
        backgroundColor:'white',
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
        borderTopColor:'grey',
        borderTopWidth:1,
        marginTop:15
    },
    subjectText:{
        fontSize:16,
        paddingTop:2
    }
});
