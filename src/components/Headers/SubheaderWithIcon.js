import { StyleSheet, Text, TouchableOpacity, View,Modal } from "react-native";
import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons'


const primaryPurple = "#e4d7ff";
const secondaryPurple="#b698fe";
const backgroundGrey="#f1f8fb";
const primaryOrang="#ffdfaf";
const secondaryOrange="#f1864c";

const SubheaderIcon = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.leftText}>{props.text}</Text>
      <TouchableOpacity ><Ionicons name="add" size={25} color={secondaryOrange}/></TouchableOpacity>
    </View>
  );
};

export default SubheaderIcon;

const styles = StyleSheet.create({
    container:{
        // backgroundColor:'dodgerblue',
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-between',
        padding:10
    },
    leftText:{
        fontSize:20,
        fontWeight:'500'
    },
    rightText:{
        fontSize:14,
        fontWeight:'500',
        color:secondaryOrange
    }

});
