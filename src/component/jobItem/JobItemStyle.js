import {StyleSheet} from "react-native";

export default StyleSheet.create({

    jobItem:{
        margin:10,
        backgroundColor:"white",
        borderRadius:10,
        borderWidth:1,
        borderColor:"black",
        padding:10
    },
    jobName:{
        fontWeight:"bold",
        color:"black",
        marginBottom:5
    },
    companyName:{
        color:"black",
        marginBottom:5
    },
    locationName:{
        backgroundColor:"tomato",
        borderRadius:10,
        color:"white",
        borderRadius:10,
        padding:5,
        marginBottom:5
    },
    locationContainer:{
        flexDirection:"row",
    },
    levelName:{
        color:"tomato",
        textAlign:"right",
        fontWeight:"bold",
        marginBottom:5
    }
})