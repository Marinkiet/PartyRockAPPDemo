import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MainHeader = () => {
  return (
    <View style={styles.container}>
      <Text>MainHeader</Text>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'pink',
        flex:1
    }
});
