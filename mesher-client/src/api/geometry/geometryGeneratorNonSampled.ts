
import axios from "axios";


const url:string = 'http://127.0.0.1:80/api/GeometryNonSampled';

export const getGeometryVector = async (): Promise<number[] | undefined> => {
    try{
        const res =  (await axios.get<number[]>(url + '/GenerateVertices')).data;
        console.log(res);
        return res;
    }
    catch(err){
        console.error(err);
    }
}
