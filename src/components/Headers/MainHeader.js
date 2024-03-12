import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons'

const primaryPurple = "#e4d7ff";
const secondaryPurple="#b698fe";
const backgroundGrey="#f1f8fb";
const primaryOrang="#ffdfaf";
const secondaryOrange="#f1864c";


const MainHeader = () => {
    return (
        <View style={styles.container}>
            <View  style={styles.greetingDetails}> 
                <View  style={styles.greetingIconWrapper}>
                    <Ionicons  style={styles.greetingIcon} size={25} name="person" color="white"/>
                </View>
                <View  style={styles.greetingTextWrapper}>
                    <Text style={styles.greetingText}>Morning, Annie</Text>
                </View>
            </View>

            <View style={styles.studyLevelContainer}>
                <Text style={styles.studyLevelText}>High School</Text>
            </View>

        </View>
    );
};

export default MainHeader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10
    },
    greetingDetails:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    greetingIconWrapper:{
        backgroundColor: primaryOrang,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:25,
        width:50,
        height:50
    },
    greetingIcon:{
       
    },
    greetingTextWrapper:{
        paddingLeft:10,
    },
    greetingText:{
        fontSize:18,
        fontWeight:'200'        
    },
    studyLevelContainer:{
       justifyContent:'flex-end'
    },
    studyLevelText:{
        fontSize:14,
        fontWeight:'500',
        letterSpacing:1
    }
});
