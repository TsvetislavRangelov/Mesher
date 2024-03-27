
import axios from "axios";

const url:string = 'http://apigw:5000';

export const getGeometryVector = async (): Promise<number[] | undefined> => {
    try{
        const res =  (await axios.get<number[]>(url)).data;
        console.log(res);
        return res;
    }
    catch(err){
        console.error(err);
    }
}
