import axios from "axios";
import { url } from "inspector";

export const getHistoryForUser = async (username: string): Promise<GeometryModel[] | undefined> => {
    try{
        const res: GeometryModel[] = (await axios.post<GeometryModel[]>(url + `/Model/GetModelHistory?username=${username}`)).data;
        return res;
    }
    catch(err){
        console.error(err);
    }
}