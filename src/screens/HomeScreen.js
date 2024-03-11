import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainHeader from "../components/Headers/MainHeader";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.headerWrapper}>
            {/* MainHeader */}
            <MainHeader/>
        </View>
        <View style={styles.subjectWrapper}>
            {/* Subheader */}
            {/* SubjectsCard */}
        </View>
        <View style={styles.ReactCardWrapper}>
             {/* Subheader */}
             {/* RecentCard */}
        </View>
    
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'magenta'
      },
      headerWrapper:{
        flex:1,
        backgroundColor:'blue'
      },
      subjectWrapper:{
        flex:2,
        backgroundColor:'pink'
      },
      ReactCardWrapper:{
        flex:3,
        backgroundColor:'orange'
      }
});
