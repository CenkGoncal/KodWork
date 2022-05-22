import {StyleSheet,Dimensions} from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"tomato",
        width: Dimensions.get("window").width / 3 ,
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        borderRadius:5,
        flexDirection:"row"
    },
    jobtitle:{
        fontSize:20,
        color:"#37474f",
        fontWeight:"bold"
    }, 
    text:{
        marginLeft:5,
        color:"white",
        fontWeight:"bold"
    }
})