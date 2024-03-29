import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";


const primaryPurple = "#e4d7ff";
const secondaryPurple="#b698fe";
const backgroundGrey="#f1f8fb";
const primaryOrang="#ffdfaf";
const secondaryOrange="#f1864c";

const Subheader = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.leftText}>{props.text}</Text>
      <TouchableOpacity ><Text style={styles.rightText}>See All</Text></TouchableOpacity>
    </View>
  );
};

export default Subheader;

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
