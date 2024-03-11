import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MainHeader = () => {
    return (
        <View style={styles.container}>
            <View  style={styles.greetingDetails}> 
                <View  style={styles.greetingIconWrapper}>
                    <Text  style={styles.greetingIcon}>icon</Text>
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
        backgroundColor: 'white',
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
        backgroundColor:'blue',
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
