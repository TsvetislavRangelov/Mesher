import axios from "axios";


const url:string = `${import.meta.env.VITE_GW_ROOT_URL}`;

console.log(url);
export const getGeometryVector = async (): Promise<number[] | undefined> => {
    try{
        const res =  (await axios.get<number[]>(url + '/GeometryNonSampled/GenerateVerticeswadawdadw')).data;
        console.log(res);
        return res;
    }
    catch(err){
        console.error("Services are not running. Failure to get geometry data.");
    }
}
