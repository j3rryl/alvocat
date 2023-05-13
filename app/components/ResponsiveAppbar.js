"use client"; // this is a client component
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import { APP_NAME, PAGES_1, PAGES_2 } from '../utils/constants';
import { useRouter } from 'next/navigation';

function ResponsiveAppBar() {
  const router = useRouter()
  return (
    <AppBar position="static" sx={{
      backgroundColor: "#63d471",
      backgroundImage: "linear-gradient(315deg, #63d471 0%, #233329 74%)"
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            className='!font-dancing'
          >
            {APP_NAME}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {PAGES_1.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block', textTransform:"capitalize" }}
                onClick={()=>{
                  router.push(`/${page}`)
                }}
              >
                {page}
              </Button>
            ))}
          </Box> 
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent:"end" }}>
            {PAGES_2.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block', textTransform:"capitalize" }}
                onClick={()=>{
                  router.push(`/${page}`)
                }}
              >
                {page}
              </Button>
            ))}
          </Box>         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;