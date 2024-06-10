import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Grid } from "@mui/material";
import { formatUpdatedAt } from "../utils";


const ProfileDetails = () => {
    const  { user } = useAuth0();
    const formattedUpdatedAt = formatUpdatedAt(user?.updated_at);
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
      };
      return (
        <Grid 
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: '100vh' }}>
        <div><img src={`${user?.picture}`}></img><List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={<ListSubheader component="div" id="nested-list-subheader">
                  Your Details
              </ListSubheader>}
          >
              <ListItemButton>
                  <ListItemIcon>
                      <SendIcon />
                  </ListItemIcon>
                  <ListItemText primary={user?.nickname} />
              </ListItemButton>
              <ListItemButton>
                  <ListItemIcon>
                      <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary={formattedUpdatedAt} />
              </ListItemButton>
              <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                      <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Email (Click to Show)" />
                  {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                              <StarBorder />
                          </ListItemIcon>
                          <ListItemText primary={user?.email} />
                      </ListItemButton>
                  </List>
              </Collapse>
          </List></div>
          </Grid>
      );
}

export default ProfileDetails;