import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const primaryPurple = "#e4d7ff";
const secondaryPurple="#b698fe";
const backgroundGrey="#f1f8fb";
const primaryOrang="#ffdfaf";
const secondaryOrange="#f1864c";

const DetailedCard = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.subjectWrapper}>
            <MaterialCommunityIcons name={props.subjectIcon} size={35}/>

            <Text style={styles.topic}>{props.topic}</Text>
                <Text style={styles.subject}>{props.subject}</Text>
                <Text style={styles.time}>{props.time}</Text>
            </View>
            <View style={styles.quizWrapper}>
               <Text style={styles.averageNum}>{props.average}%</Text>
               <Text style={styles.quizeTotalNum}>{props.quizTotal}</Text>
               <Text style={styles.numQuizesNum}>{props.numQuizes} Quizes</Text>
            </View>
        </TouchableOpacity>
    );
};

export default DetailedCard;

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: primaryPurple,
        borderTopRightRadius:50,
        // alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        flexDirection:'row',
        // alignItems:'center',
        padding:3,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:5

    },
    subjectWrapper:{
        flex:1,
        // backgroundColor:'blue',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius:20,
        padding:10,
        justifyContent:'flex-end'
    },
    quizWrapper:{
        width:'30%',
        backgroundColor:"white",
        borderTopRightRadius:50,
        alignItems:'center',
        justifyContent:'center'
    },
    topic:{
        fontSize:18
    },
    subject:{
        fontStyle:'italic',
        paddingTop:5
    },
    averageTitle:{
        fontSize:18,
        fontWeight:'500'
    },
    averageNum:{
        fontSize:30,
    },
    time:{
        fontSize:12,
        paddingTop:2
    }

});


