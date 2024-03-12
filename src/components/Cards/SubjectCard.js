import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const primaryPurple = "#e4d7ff";
const secondaryPurple="#b698fe";
const backgroundGrey="#f1f8fb";
const primaryOrang="#ffdfaf";
const secondaryOrange="#f1864c";
const SubjectCard = (props) => {
  return (
    <View style={styles.container}>
            <View style={styles.subjectWrapper}>

            <Text style={styles.subjectTitle}>Biology</Text>
            <Text style={styles.subjectDetails}>26 Notes &#183; 16 Quizes</Text>
            </View>
            <View style={styles.subjectIconWrapper}>
            <MaterialCommunityIcons name="dna" size={50} color={secondaryPurple}/>
               
            </View>
          
        </View>
  );
};

export default SubjectCard;


const styles = StyleSheet.create({
    container: {
        height: '80%',
        backgroundColor: primaryPurple,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        justifyContent: 'center',
        // marginHorizontal: 10,
        flexDirection:'row',
        // alignItems:'center',
        padding:3,
     

    },
    subjectWrapper:{
        // width:'100%',
        flex:1,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        justifyContent:'center',
        paddingHorizontal:30,
        backgroundColor:secondaryPurple
    },
    subjectIconWrapper:{
        alignItems:'center',
        justifyContent:'center',
    },
    quizWrapper:{
        width:50,
        height:50,
        backgroundColor:"white",
        alignItems:'center',
        justifyContent:'center'
    },
    subjectTitle:{
        fontSize:40,
        fontWeight:'200',
        letterSpacing:1,
        color:'white'
    },
    subjectDetails:{
        letterSpacing:1,
        color:'white'
    }



});



