'use client';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useTheme, SxProps, Theme } from '@mui/material/styles';

const menus = [
  {
    title: 'Company Info',
    subMenu: [
      'About Us',
      'Carrier',
      'We are hiring',
      'Blog'
    ]
  },
  {
    title: 'Legal',
    subMenu: [
      'About Us',
      'Carrier',
      'We are hiring',
      'Blog'
    ]
  },
  {
    title: 'Features',
    subMenu: [
      'Business Marketing',
      'User Analytic',
      'Live Chat',
      'Unlimited Support'
    ]
  },
  {
    title: 'Resources',
    subMenu: [
      'IOS & Android',
      'Watch a Demo',
      'Customers',
      'API'
    ]
  }
];

interface BottomBarProps {
  sx?: SxProps<Theme>;
}

export default function BottomBar({ sx = [] }: BottomBarProps) {
  const theme = useTheme();
  return (
    <>
      <Box sx={[
        ...(Array.isArray(sx) ? sx : [sx])
      ]}>
        <Container maxWidth='xl' sx={{
          py: '50px',
          position: 'relative',
          [theme.breakpoints.down('md')]: {
            px: '30px'
          }
        }}>
          <Grid container spacing={2} alignItems='center' justifyContent='space-between'>
            <Grid item xs={12} md={3} sx={{
              [theme.breakpoints.down('md')]: {
                '&.MuiGrid-item': {
                  pl: '10px'
                }
              },
            }}>
              <Typography variant='h3'>Bandage</Typography>
            </Grid>
            <Grid item xs={12} md={3} sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              [theme.breakpoints.down('md')]: {
                justifyContent: 'flex-start',
                '&.MuiGrid-item': {
                  pl: 0
                }
              },
              mr: 10,
              '& svg': {
                color: 'primary.contrastText',
                fontSize: 24,
                mx: '10px'
              }
            }}>
              <FacebookRoundedIcon />
              <InstagramIcon />
              <TwitterIcon />
            </Grid>
          </Grid>
          <Divider sx={{
            border: '1px solid #e6e6e6',
            position: 'absolute',
            bottom: '5px',
            left: 0,
            right: 0,
            zIndex: 1,
            display: { xs: 'none', md: 'block' }
          }}/>
        </Container>
      </Box>
      <Box>
        <Container maxWidth='xl' sx={{
          my: '30px',
          [theme.breakpoints.down('md')]: {
            px: '30px'
          }
        }}>
            <Grid container spacing={2}>
              {menus.map((menu) => (
                <Grid key={menu.title} item xs={12} md={2}>
                  <Typography variant='h5' mb='10px'>{menu.title}</Typography>
                  <MenuList>
                    {menu.subMenu.map((sub) => (
                      <MenuItem key={sub} disableGutters={true} sx={{ 
                        fontWeight: 700,
                        '&:hover': {
                          backgroundColor: 'transparent',
                          fontWeight: 400
                        }
                      }}>{sub}</MenuItem>
                    ))}
                  </MenuList>
                </Grid>
              ))}
              <Grid item xs={12} md={4}>
                <Typography variant='h5' mb='20px'>Get in Touch</Typography>
                <Box sx={{
                  width: 320,
                  border: '1px solid #E6E6E6',
                  borderRadius: '5px',
                  backgroundColor: '#F9F9F9',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}>
                  <TextField id="your-email" label="Your Email" variant="standard" fullWidth={true} sx={{
                    '& .MuiInputBase-root': {
                      height: '42px',
                      pl: '16px'
                    },
                    '& .MuiInputLabel-root': {
                      pl: '10px'
                    }
                  }}/>
                  <Button variant='contained' sx={{
                    color: '#fff',
                    backgroundColor: 'primary.contrastText',
                    fontSize: 14,
                    width: 117,
                    height: 58,
                    textTransform: 'none'
                  }}>Subscribe</Button>
                </Box>
                <Typography variant='caption' sx={{
                  display: 'block',
                  fontWeight: 400,
                  fontSize: 12,
                  pt: '5px',
                  pl: '5px'
                }}>Lore imp sum dolor Amit</Typography>
              </Grid>
            </Grid>
        </Container>
      </Box>
      <Box sx={{
        backgroundColor: '#fafafa'
      }}>
        <Container maxWidth='xl' sx={{
          py: '30px',
          [theme.breakpoints.down('md')]: {
            px: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }}>
          <Typography variant='caption' sx={{
            [theme.breakpoints.down('md')]: {
              textAlign: 'center',
              maxWidth: '210px'
            }
          }}>Made With Love By Finland All Rights Reserved</Typography>
        </Container>
      </Box>
    </>
  );
}