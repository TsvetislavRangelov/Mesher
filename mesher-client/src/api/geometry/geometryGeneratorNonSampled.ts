import axios from "axios";


const url:string = `${import.meta.env.VITE_GW_ROOT_URL}`;

export const generateVertices = async (username: string | undefined): Promise<GeometryModel | undefined> => {
    if(!username){
        return;
    }
    try{
        const res: GeometryModel =  (await axios.get<GeometryModel>(url + `/GeometryNonSampled/GenerateVertices?username=${username}`)).data;
        return res;
    }
    catch(err){
        console.error("Services are not running. Failure to get geometry data.");
        
    }
    return undefined;
}

export const saveModelToHistory = async (model: GeometryModel): Promise<number | undefined> => {
    try{
        const res: number = (await axios.post<number>(url + '/Model/SaveModel', {
            vertexData: model.vertexData,
            id: model.id,
            generatedFor: model.generatedFor
        })).data;
        return res;
    }
    catch(err){
        console.error(err);
    }
}