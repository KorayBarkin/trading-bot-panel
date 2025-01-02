import { AppBar, Toolbar, Button, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/Help';
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Banner = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
          <Button
            color="inherit"
            startIcon={<HomeIcon />}
          >
            Homepage
          </Button>
          <Button
            color="inherit"
            startIcon={<HelpIcon />}
          >
            How To
          </Button>
          <Button
            color="inherit"
            startIcon={<InfoIcon />}
          >
            About
          </Button>
        </Box>
        <Button
          color="inherit"
          startIcon={<AccountCircleIcon />}
        >
          Profile
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Banner; 