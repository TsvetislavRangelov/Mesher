import axios from "axios";

const url:string = `${import.meta.env.VITE_GW_ROOT_URL}`;
export const getHistoryForUser = async (username: string | undefined): Promise<GeometryModel[] | undefined> => {
    if(!username){
        return;
    }
    try{
        const res: GeometryModel[] = (await axios.get<GeometryModel[]>(url + `/Model/GetModelHistory?username=${username}`)).data;
        return res;
    }
    catch(err){
        console.error(err);
    }
}