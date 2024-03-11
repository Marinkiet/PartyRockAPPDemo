import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Subheader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.leftText}>Subjects</Text>
      <Text style={styles.rightText}>See All</Text>
    </View>
  );
};

export default Subheader;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'dodgerblue',
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
        fontWeight:'500'
    }

});
