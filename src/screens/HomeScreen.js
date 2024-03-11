import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MainHeader from "../components/Headers/MainHeader";
import Subheader from "../components/Headers/Subheader";
import TitleCard from "../components/Cards/TitleCard";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.headerWrapper}>
            {/* MainHeader */}
            <MainHeader/>
        </View>
        <View style={styles.subjectWrapper}>
            {/* Subheader */}
            <Subheader/>
           <ScrollView>
            <TitleCard/>
           
           </ScrollView>
        </View>
        <View style={styles.ReactCardWrapper}>
             {/* Subheader */}
             {/* RecentCard */}
        </View>
    
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'magenta',
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
