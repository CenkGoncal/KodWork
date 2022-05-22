import {StyleSheet,Dimensions} from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        flexDirection:"row",
        backgroundColor:"tomato",
        padding:3
    },
    logo:{
        marginRight:10,
        alignSelf:"center",
        fontWeight:"bold",
        fontSize:20,
        color:"white",
        flex:1
    },
    dropBox:{
        backgroundColor:"white",
        padding:1,
        borderTopStartRadius:5,
        borderTopEndRadius:5,
        flexDirection:"row",
        alignItems:"center"
    },
    dropdown:{
        position:"absolute",
        padding:8,
        width: Dimensions.get("window").width,
        top:50
    },
    dropItem:{
        flex:1,
        padding:10,
        textAlign:"right",
        backgroundColor:"white",
        borderWidth:1,
        borderColor:"whitesmoke",
    },
    dropHeader:{
        flex:1
    }
})