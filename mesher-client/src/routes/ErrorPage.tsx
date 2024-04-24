import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    style={{ minHeight: '100vh' }}>
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i> <br />
        <i>You can head back to the front page.</i> <br />
        <Link to={`/`}>
        <Button variant="contained">Back</Button>
        </Link>
      </p>
    </div>
    </Grid>
  );
}