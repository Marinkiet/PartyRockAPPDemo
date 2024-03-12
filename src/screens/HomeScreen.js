import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MainHeader from "../components/Headers/MainHeader";
import Subheader from "../components/Headers/Subheader";
import TitleCard from "../components/Cards/TitleCard";
import DetailedCard from "../components/Cards/DetailedCard";

const primaryPurple = "#e4d7ff";
const secondaryPurple="#b698fe";
const backgroundGrey="#f1f8fb";
const primaryOrang="#ffdfaf";
const secondaryOrange="#f1864c";
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.headerWrapper}>
            {/* MainHeader */}
            <MainHeader/>
        </View>
        <View style={styles.subjectWrapper}>
            {/* Subheader */}
         <View>
         <Subheader text="Subjects"/>
         </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            <TitleCard subjectName="Maths" subjectIcon="math-compass"/>
            <TitleCard subjectName="English" subjectIcon="language-markdown-outline"/> 
             <TitleCard subjectName="Biology" subjectIcon="dna"/>
            <TitleCard subjectName="Physics" subjectIcon="atom"/>
            <TitleCard subjectName="Geography" subjectIcon="map-legend"/>
           </ScrollView>
        </View>
       
           
        </View>
        <View style={styles.ReactCardWrapper}>
        <Subheader text="Recently Learned"/>
        <ScrollView showsHorizontalScrollIndicator={false} >
            <DetailedCard time="02/05/2024 08:23" average="76" numQuizes="3" quizTotoal="34" subjectIcon="dna" subject="Biology" topic="Mitosis vs Miosis"/>
            <DetailedCard time="02/04/2024 11:56" average="60" numQuizes="1" quizTotoal="34" subjectIcon="dna" subject="Biology" topic="Cell Division"/>
            <DetailedCard time="02/04/2024 08:23" average="54" numQuizes="5" quizTotoal="34" subjectIcon="math-compass" subject="Maths" topic="Inequalities"/>
            <DetailedCard time="02/03/2024 17:10" average="90" numQuizes="3" quizTotoal="34"  subjectIcon="dna"subject="Biology" topic="Gametes"/>
            <DetailedCard time="02/03/2024 10:05" average="34" numQuizes="4" quizTotoal="34" subjectIcon="language-markdown-outline" subject="English" topic="Friendly Letter"/>
            <DetailedCard time="02/01/2024 12:12" average="66" numQuizes="0" quizTotoal="34"  subjectIcon="atom" subject="Physics" topic=" Linear Momentum"/>
            </ScrollView>
        </View>
    
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'magenta',
        backgroundColor:backgroundGrey
      },
      headerWrapper:{
        flex:1,
        // backgroundColor:'blue'
      },
      subjectWrapper:{
        flex:2,
        // backgroundColor:'pink',
        justifyContent:'center',
      },
      ReactCardWrapper:{
        flex:4,
        justifyContent:'center',
        // backgroundColor:'orange',
      },
    
});
