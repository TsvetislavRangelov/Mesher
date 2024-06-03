import { Grid, Button } from "@mui/material"
import { Link } from "react-router-dom"
import LoginButton from "./LoginButton";


const Unauthenticated = () => {
    return <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    style={{ minHeight: '100vh' }}>
    <div id="error-page">
      <h1>Oops!</h1>
      <p>You need to log in first before accessing this page.</p>
      <p>
        <i>You can head back to the front page or log in.</i> <br />
        <Link to={`/`}>
        <Button sx={{margin: 2}} variant="contained">Back</Button>
        </Link>
        <LoginButton></LoginButton>
      </p>
    </div>
    </Grid>
}

export default Unauthenticated;