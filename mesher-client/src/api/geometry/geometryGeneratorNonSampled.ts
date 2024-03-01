import axios from "axios";

const url:string = 'http://localhost:5215/api/GeometryTest/GetArray';

export const getGeometryVector = async (): Promise<any> => {
    try{
        return (await axios.get(url)).data;
    }
    catch(err){
        console.error(err);
    }
}