import axios from "axios";
import { useState } from "react";


export default  () => {

    const instance =  axios.create({
        baseURL: 'https://www.themuse.com/api/public',
        headers: {'api_key': 'a014cb86648427ca02c694ab41bf9b263931c198a795ac5882e476e40ecb603d'},
        responseType: 'json'
    });
    

    return instance
}

