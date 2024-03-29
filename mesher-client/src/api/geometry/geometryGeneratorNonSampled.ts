
import axios from "axios";


const url:string = 'http://192.168.49.2:80/api/GeometryNonSampled';

export const getGeometryVector = async (): Promise<number[] | undefined> => {
    try{
        const res =  (await axios.get<number[]>(url + '/GenerateVertices', {
            headers: {
                'Host': 'www.mesher.com'
            }
        })).data;
        console.log(res);
        return res;
    }
    catch(err){
        console.error(err);
    }
}
