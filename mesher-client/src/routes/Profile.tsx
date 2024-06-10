import { useAuth0 } from "@auth0/auth0-react";
import Unauthenticated from "../components/Unauthenticated";
import ProfileDetails from "../components/ProfileDetails";
import GeneratorHistory from "../components/GeneratorHistory";


const Profile = () => {
    const  { isAuthenticated } = useAuth0();



    if(!isAuthenticated){
        return <Unauthenticated></Unauthenticated>
    }
    return (
        <><ProfileDetails /><GeneratorHistory /></>
    )
}

export default Profile;