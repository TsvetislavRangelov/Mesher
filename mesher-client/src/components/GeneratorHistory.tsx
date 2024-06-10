import { useAuth0 } from "@auth0/auth0-react";
import { getHistoryForUser } from "../api/history/generatorHistory";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { CircularProgress, Grid } from "@mui/material";


const GeneratorHistory = () => {
    const  { user } = useAuth0();
    const [isPending, setPending] = useState<boolean>(true);
    const [history, setHistory] = useState<GeometryModel[]>([]);


    const getHistoryMutation = useMutation({
        mutationFn: async (username: string) => {
            const hist = await getHistoryForUser(username);
            setPending(false);
            if(hist && hist.length > 0){
                setHistory(hist);
            }
        }
    });

    useEffect(() => {
        getHistoryMutation.mutate(user?.nickname!);
    }, [history.length]);

    if(isPending) return <div>
    <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  sx={{ minHeight: '100vh' }}><CircularProgress />
  Loading...</Grid>
  </div>

  return (
    <div>
        {history.length > 0 ? history.map((x) => {
            return <p>{x.id}</p>;
        }) : <div>NESHTO SE EBA</div>}
    </div>
  )

}

export default GeneratorHistory;