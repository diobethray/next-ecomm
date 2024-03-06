'use client';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Badge from '@mui/material/Badge';
import Grid from '@mui/material/Grid';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YoutubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import PhoneOutlined from '@mui/icons-material/PhoneOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import Modal from '@mui/material/Modal';
import WishlistModalContent from '@/app/ui/WishlistModalContent';
import CartModalContent from '@/app/ui/CartModalContent';
import Link from 'next/link';
import { NextIntlClientProvider } from 'next-intl';

import { useState } from 'react';
import { useTheme, createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/lib/store';

const pages = ['Home', 'Shop', 'About', 'Blog', 'Contact', 'Pages'];

interface BadgeCartProps {
  className: string;
  value: number;
}

function BadgeCart( { className, value }: BadgeCartProps ) {
  return (
    <Badge className={className} badgeContent={value} sx={{
      color: 'primary.contrastText'
    }}>
      <ShoppingCartOutlinedIcon />
    </Badge>
  );
}

interface BadgeFavoriteProps {
  className: string;
  value: number;
}

function BadgeFavorite( { className, value }: BadgeFavoriteProps ) {
  return (
    <Badge className={className} badgeContent={value} sx={{
      color: 'primary.contrastText'
    }}>
      <FavoriteBorderOutlinedIcon />
    </Badge>
  );
}

function customizeTheme(existingTheme: Theme) {
  return createTheme({
    ...existingTheme,
    components: {
      MuiListItemButton: {
        styleOverrides: {
          root: {
            display: 'block',
            textAlign: 'center'
          }
        }
      },
      MuiListItemText: {
        styleOverrides: {
          root: {
            textAlign: 'center',
            fontSize: 30
          },
        },
      },
      MuiBadge: {
        styleOverrides: {
          root: {
            '& .MuiBadge-badge': {
              top: 13,
              right: -5
            },
            '&.desktop .MuiBadge-badge': {
              top: 10,
              right: -8
            },
            '& svg': {
              fontSize: 30,
            }
          }
        }
      }
    }
  });
}

const modalStyle = (theme: Theme) => {
  return {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    [theme.breakpoints.up('md')]: {
      width: '60%'
    },
    [theme.breakpoints.down('md')]: {
      width: '80%'
    }
  };
};

function ResponsiveAppBar() {
  const theme = useTheme();
  let ct = customizeTheme(theme);
  const wishlistState = useSelector((state: RootState) => state.wishlist);
  const wishlist = wishlistState.wishlist;
  const cartState = useSelector((state: RootState) => state.cart);
  const cart = cartState.cart;

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleNavMenu = () => {
    setMobileMenu(mobileMenu ? false : true);
  };

  const [openCart, setOpenCart] = useState(false);
  const handleOpenCart = () => setOpenCart(true);
  const handleCloseCart = () => setOpenCart(false);
  const [openWishlist, setOpenWisthlist] = useState(false);
  const handleOpenWishlist = () => setOpenWisthlist(true);
  const handleCloseWishlist = () => setOpenWisthlist(false);

  return (
    <ThemeProvider theme={ct}>
      <AppBar position="static" color='transparent' sx={{
        boxShadow: 'none'
      }}>
        <Box sx={{
          display: { xs: 'none', md: 'flex' },
          backgroundColor: 'secondary.dark'
        }}>
          <Grid container sx={{
            color: 'secondary.light',
            px: '25px',
            pt: '15px',
            pb: '10px',
            '& svg': {
              color: 'secondary.light',
              fontSize: 16
            },
            '& button': {
              p: '5px'
            }
          }}>
            <Grid item xs={5}>
              <Grid container alignItems='center'>
                <Grid item display='flex' alignItems='center' mr='20px'>
                  <PhoneOutlined/>
                  <Typography ml='2px' variant='caption' fontWeight={700}>(225) 555-0118</Typography>
                </Grid>
                <Grid item display='flex' alignItems='center'>
                  <EmailOutlinedIcon/>
                  <Typography ml='2px' variant='caption' fontWeight={700}>michelle.rivera@example.com</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Typography variant='caption' fontWeight={700}>Follow Us and get a chance to win 80% off</Typography>
            </Grid>
            <Grid item xs={3} justifyContent='flex-end' display='flex' alignItems='center'>
              <Typography variant='caption' fontWeight={700} paddingRight='5px'>Follow Us : </Typography>
              <IconButton><InstagramIcon /></IconButton>
              <IconButton><YoutubeIcon /></IconButton>
              <IconButton><FacebookRoundedIcon /></IconButton>
              <IconButton><TwitterIcon /></IconButton>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{
          px: 4,
        }}>
          <Toolbar disableGutters sx={{
            color: 'primary.dark'
          }}>
            <Grid container alignItems='center' sx={{
              display: { xs: 'none', md: 'flex' }
            }}>
              <Grid item xs={2}>
                <Typography
                  variant="h3"
                  noWrap
                  sx={{ ml: '3px' }}
                >
                  Bandage
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <List dense={true} disablePadding={true} sx={{ display: 'flex', width: 380 }}>
                  {pages.map((page) => (
                    <ListItem key={page} disablePadding={true} sx={{
                      
                    }}>
                      <ListItemButton selected={page === 'Shop' ? true : false} disableGutters={true} sx={{ 
                        textAlign: 'center',
                        display: 'flex',
                        '&:hover': {
                          backgroundColor: 'transparent'
                        },
                        '&:hover span': {
                          color: 'primary.dark',
                          fontWeight: 500
                        },
                        '&.Mui-selected': {
                          color: 'primary.dark',
                          backgroundColor: 'transparent'
                        },
                        '&.Mui-selected span': {
                          color: 'primary.dark',
                          backgroundColor: 'transparent',
                          fontWeight: 500
                        },
                        '&.Mui-selected:hover': {
                          backgroundColor: 'transparent'
                        },
                        '& svg': {
                          fontSize: 20
                        }
                      }}>
                        <ListItemText primary={<Link href='/'>{page}</Link>} sx={{ 
                          '& span, & a': {
                            fontSize: 14,
                            fontWeight: 700,
                            color: 'primary.main',
                            textDecoration: 'none'
                          },
                        }}/>
                        {/* TODO: check if what page is selected */}
                        {(page === 'Shop') ? ( <ExpandMoreOutlinedIcon /> ) : ''}
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={4} sx={{
                display: 'flex',
                justifyContent: 'flex-end'
              }}>
                <List disablePadding={true} sx={{
                  display: 'flex',
                  '& .MuiSvgIcon-root': {
                    fontSize: 18
                  },
                  '& .MuiButtonBase-root:hover': {
                    backgroundColor: 'transparent'
                  }
                }}>
                  <ListItem dense={true} disableGutters={true} sx={{ width: '166px' }}>
                    <ListItemButton disableGutters={true} dense={true} sx={{
                      display: 'flex',
                      ml: '-15px',
                      mr: '-10px'
                    }}>
                      <ListItemIcon sx={{
                        justifyContent: 'flex-end',
                        '& svg': {
                          fontSize: 16,
                          color: 'primary.contrastText'
                        }
                      }}><PersonOutlinedIcon/></ListItemIcon>
                      <ListItemText primary='Login / Register' disableTypography={true} sx={{
                        color: 'primary.contrastText',
                        fontSize: 14,
                        fontWeight: 700
                      }}/>
                    </ListItemButton>
                </ListItem>
                <ListItem dense={true} disableGutters={true} sx={{ width: '46px' }}>
                  <ListItemButton alignItems='center' dense={true} disableGutters={true} sx={{ textAlign: 'right' }}>
                    <Badge badgeContent={0} sx={{
                      color: 'primary.contrastText'
                    }}>
                      <SearchOutlinedIcon />
                    </Badge>
                  </ListItemButton>
                </ListItem>
                <ListItem dense={true} disableGutters={true} sx={{ width: '46px' }}>
                  <ListItemButton alignItems='center' dense={true} disableGutters={true} onClick={handleOpenCart} >
                    <BadgeCart className='desktop' value={cart.length} />
                  </ListItemButton>
                </ListItem>
                <ListItem dense={true} disableGutters={true} sx={{ width: '46px' }}>
                  <ListItemButton alignItems='center' dense={true} disableGutters={true} onClick={handleOpenWishlist} >
                    <BadgeFavorite className='desktop' value={wishlist.length} />
                  </ListItemButton>
                </ListItem>
                </List>
              </Grid>
            </Grid>
            <Typography
              variant="h3"
              noWrap
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1
              }}
            >
              Bandage
            </Typography>
            <Box sx={{ 
              fontSize: 24, 
              flexGrow: 1, 
              justifyContent: 'flex-end',
              display: { xs: 'flex', md: 'none' } 
            }}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleNavMenu}
                color="inherit"
              >
                <SortOutlinedIcon sx={{
                  transform: 'scaleX(-1)',
                  fontSize: 24
                }}/>
              </IconButton>
            </Box>
          </Toolbar>
          <Collapse 
            in={mobileMenu}
            easing={{
              enter: theme.transitions.easing.easeIn,
              exit: theme.transitions.easing.easeOut
            }}
            timeout='auto'
            sx={{
              display: { xs: 'flex', md: 'none' }
          }}>
            <List>
              {pages.map((page) => (
                <ListItem key={page} disablePadding>
                  <ListItemButton 
                    alignItems='center'
                  >
                    <ListItemText primary={<Link href='/'>{page}</Link>} disableTypography={true} sx={{
                      '& a': {
                        textDecoration: 'none',
                        color: 'primary.main'
                      }
                    }}/>
                  </ListItemButton>
                </ListItem>
              ))}
              <ListItem sx={{ justifyContent: 'center' }}>
                <ListItemButton disableGutters={true} sx={{
                  display: 'flex',
                  maxWidth: '300px',
                  mr: '-10px',
                  ml: '-10px'
                }}>
                  <ListItemIcon sx={{
                    justifyContent: 'flex-end',
                    '& svg': {
                      fontSize: 30,
                      color: 'primary.contrastText'
                    }
                  }}><PersonOutlinedIcon/></ListItemIcon>
                  <ListItemText primary='Login / Register' disableTypography={true} sx={{
                    color: 'primary.contrastText',
                  }}/>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton alignItems='center'>
                  <Badge badgeContent={0} sx={{
                    color: 'primary.contrastText'
                  }}>
                    <SearchOutlinedIcon />
                  </Badge>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton alignItems='center' onClick={handleOpenCart} >
                  <BadgeCart className='' value={cart.length}/>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton alignItems='center' onClick={handleOpenWishlist} >
                  <BadgeFavorite className='' value={wishlist.length} />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>
        </Box>
        <Modal
          open={openWishlist}
          onClose={handleCloseWishlist}
          aria-labelledby="wishlist-modal-title"
          aria-describedby="wishlist-modal-description"
        >
          <Box sx={modalStyle(theme)}>
            <Typography id="wishlist-modal-title" variant="h3">
              Wishlist
            </Typography>
            <Box id="wishlist-modal-description" sx={{ mt: 2 }}>
              <WishlistModalContent />
            </Box>
          </Box>
        </Modal>
        <Modal
          open={openCart}
          onClose={handleCloseCart}
          aria-labelledby="cart-modal-title"
          aria-describedby="cart-modal-description"
        >
          <Box sx={modalStyle(theme)}>
            <Typography id="cart-modal-title" variant="h3">
              Cart
            </Typography>
            <Box id="cart-modal-description" sx={{ mt: 2 }}>
            <NextIntlClientProvider
              // Define non-serializable props here
              defaultTranslationValues={{
                i: (text) => <i>{text}</i>
              }}
              locale={'US'}
            >
                <CartModalContent />
              </NextIntlClientProvider>
            </Box>
          </Box>
        </Modal>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
