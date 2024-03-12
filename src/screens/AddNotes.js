import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
const primaryPurple = "#e4d7ff";
const secondaryPurple="#b698fe";
const backgroundGrey="#f1f8fb";
const primaryOrang="#ffdfaf";
const secondaryOrange="#f1864c";
const AddNotes = () => {
    return (
        <SafeAreaView style={styles.conatainer}>
            <View style={styles.titleWrapper}> 
            <Ionicons name="chevron-back" size={30}/>
            <Text style={styles.titleText}>New Note</Text>
               
            </View>
            <View style={styles.topicWrapper} >
            <Text style={styles.topicLabel}>Topic:</Text> 
                <TextInput style={styles.topic}placeholder="E.x Calculaus - We leared about derivitievs today"></TextInput>
            </View>
            <View style={styles.topicLoad}>
                {/* <Text style={styles.generatedTopic}>
                    <AntDesign>
                </Text> */}
                <AntDesign name="loading1" size={30} color={primaryPurple}/>
            </View>
            <View style={styles.generatedWrapper}>
            <Text style={styles.titleText}>Generated Notes</Text>
            </View>
        </SafeAreaView>
    );
};

export default AddNotes;

const styles = StyleSheet.create({
    conatainer:{
        flex:1,
        margin:10,
        // backgroundColor:backgroundGrey
        
    },
    topicWrapper:{
        width:'90%',
        padding:20,
        margin:10
    },
    topic:{
padding:10,
borderBottomColor:secondaryPurple,
borderWidth:1,
borderTopWidth:0,
borderLeftWidth:0,
borderRightWidth:0,

    },
    titleWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
        
    },
    topicLabel:{
        fontSize:20
    },
    titleText:{
        fontSize:30,
        color:secondaryPurple,
        padding:5
    },
    generatedTopic:{
        fontSize:16,
        fontWeight:'400'
    },
    topicLoad:{
        marginLeft:20,
        marginBottom:10
    },
    generatedWrapper:{
        backgroundColor:'white',
        height:450,
        borderRadius:20
    }
});
