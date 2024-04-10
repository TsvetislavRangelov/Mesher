import axios from "axios";


const url:string = `${process.env.GW_ROOT_URL}`;

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
