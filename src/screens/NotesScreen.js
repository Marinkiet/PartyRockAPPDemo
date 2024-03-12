import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import MainHeader from "../components/Headers/MainHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import DetailedCard from "../components/Cards/DetailedCard";
import SubjectCard from "../components/Cards/SubjectCard";
import Subheader from "../components/Headers/Subheader";
import SubheaderIcon from "../components/Headers/SubheaderWithIcon";
const notesData = [
    {  'time':'04/02/2024 14:20','title': 'Cell Division Intro' },
    {  'time':'04/02/2024 16:03','title': 'Mitosis vs Miosis'},
    {  'time':'04/02/2024 08:00','title': 'Genetics' },
    {  'time':'03/02/2024 19:45','title': 'DNA replication' },
    {  'time':'03/02/2024 20:30','title': 'Mendelian genetics' },
    {  'time':'03/02/2024 22:00','title': 'Mutations Deep Dive' },
    {  'time':'02/02/2024 23:15','title': 'Cell Structure and Components overview' },
    
];
const quizeData = [
    {  'grade':"24/30", 'time':'04/02/2024 16:03','title': 'Mitosis vs Miosis'},
    {  'grade':"40/40",'time':'04/02/2024 14:20','title': 'Cell Division Intro' },
    {  'grade':"18/20",'time':'04/02/2024 08:00','title': 'Genetics' },
    {  'grade':"10/30",'time':'03/02/2024 19:45','title': 'DNA replication' },
    {  'grade':"12/20",'time':'03/02/2024 20:30','title': 'Mendelian genetics' },
    {  'grade':"43/50",'time':'03/02/2024 22:00','title': 'Mutations Deep Dive' },
    {  'grade':"16/20",'time':'02/02/2024 23:15','title': 'Cell Structure and Components overview' },
    
];
const ItemSeparatorComponent = () => {
    return (
      <View style={styles.separator} />
    );
  };

const NotesScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerWrapper}>
                <MainHeader />
            </View>
            <View style={styles.subjectWrapper}>
                <SubjectCard />
            </View>
            <View style={styles.subjectBody}>
                {/* Notes */}
               
                <View style={styles.subjectBodyNotes}>
                    <SubheaderIcon text="Notes" />
                    <FlatList
                    data={notesData}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.itemContainer}>
                            <Text style={styles.titleText}>{item.title}</Text>
                            <Text style={styles.titleTime}>{item.time}</Text>
                        </TouchableOpacity>
                    )}
                  ItemSeparatorComponent={ItemSeparatorComponent}
                />
                </View>
                <View style={styles.subjectBodyQuizes}>
                    <SubheaderIcon text="Quizes" />
                    <FlatList
                    data={quizeData}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.quizContainer}>
                            <View>
                            <Text style={styles.titleText}>{item.title}</Text>
                            <Text style={styles.titleTime}>{item.time}</Text>
                           
                            </View>
                            <View>
                            <Text style={styles.titleTime}>{item.grade}</Text>
                            </View>
                          
                        </TouchableOpacity>
                    )}
                  ItemSeparatorComponent={ItemSeparatorComponent}
                />
                </View>
                {/* Quizes */}
            </View>
        </SafeAreaView>
    );
}
export default NotesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flex: 1,
        // backgroundColor:'blue'
    },
    subjectWrapper: {
        flex: 2,
        //  backgroundColor:'magenta',
        alignItems: 'center',
        justifyContent: 'center'

    },
    subjectBody: {
        flex: 5,
        // backgroundColor:'pink',

    },
    subjectBodyNotes: {
        flex: 1,
        // backgroundColor:'blue'
    },
    subjectBodyQuizes: {
        flex: 1,
    },
    itemContainer:{
        marginLeft:20,
        marginVertical:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
      
        
    },
    quizContainer:{
        marginLeft:20,
        marginVertical:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    titleText:{
    },
    titleTime:{
        fontSize:10,
        fontStyle:'italic',
        fontWeight:'200',
        marginRight:5
    },
    separator: {
        height: 1, 
        backgroundColor: '#ddd'
    }

});

