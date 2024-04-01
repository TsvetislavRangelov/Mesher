
import axios from "axios";


const url:string = 'http://envoy-default-eg-e41e7b31.envoy-gateway-system.svc.cluster.local/api/GeometryNonSampled';

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
