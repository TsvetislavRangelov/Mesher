import axios from "axios";


const url:string = `${import.meta.env.VITE_GW_ROOT_URL}`;

export const getGeometryVector = async (): Promise<GeometryModel | undefined> => {
    try{
        const res: GeometryModel =  (await axios.get<GeometryModel>(url + '/GeometryNonSampled/GenerateVertices')).data;
        console.log(res);
        return res;
    }
    catch(err){
        console.error("Services are not running. Failure to get geometry data.");
    }
}
