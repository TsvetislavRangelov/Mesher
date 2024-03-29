
import axios from "axios";

const url:string = 'http://localhost:8888/api/GeometryNonSampled';

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
