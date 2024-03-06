'use client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Button from '@mui/material/Button';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import IconButton from '@mui/material/IconButton';
import Carousel from 'react-material-ui-carousel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ImagePlaceholder from '@/app/ui/ImagePlaceholder';
import Rating from '@mui/material/Rating';
import Skeleton from '@mui/material/Skeleton';
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { useSearchParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/lib/store';
import { useGetProductQuery } from '@/app/services/dummy';
import { updateProduct } from '@/app/lib/productSlice';
import { addToWishList } from '@/app/lib/wishlistSlice';
import { addToCart } from '@/app/lib/cartSlice';
import WishListItem from '@/app/types/WishListItem';
import CartItem from '@/app/types/CartItem';
import Snackbar from '@mui/material/Snackbar';

export default function Details() {
  const theme = useTheme();
  const urlParams = useSearchParams();
  const productId = urlParams.get('id');
  const productState = useSelector((state: RootState) => state.product);
  const wishlistState = useSelector((state: RootState) => state.wishlist);
  const cartState = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const [ tab, setTab ] = useState(0);
  const [ snackbarState, setSnackbarState ] = useState(false);
  const [ snackbarMessage, setSnackbarMessage ] = useState('');

  const product = productState.product;
  const wishlist = wishlistState.wishlist;
  const cart = cartState.cart;

  // fetch data using RTK Query Hooks
  const { data, error, isLoading, isFetching } = useGetProductQuery(productId);

   // dispatch data response
   useEffect(() => {
    if (data) {
      dispatch(updateProduct(data));
    }
  }, [data, dispatch]);

  const breadcrumbs = [
    <Link key='1' color='primary.dark' href='/'>
      Home
    </Link>,
    <Typography key='2' color='primary.light' fontWeight={700}>
      Shop
    </Typography>,
  ];

  function createImageIcons() {
    if (product) {
      return (product.images.map((img) => (
        <ImagePlaceholder
          key={img}
          url={img}
          width={100}
          height={75}
          mobileWidth={100}
          mobileHeight={75}
          tabletWidth={100}
          tabletHeight={75}
          alt=''
        />
      )));
    } else {
      return (<></>);
    }
  }

  function handleTabs(event: React.SyntheticEvent, newTab: number) {
    setTab(newTab);
  }

  function a11yProps(index: number) {
    return {
      id: `product-tab-${index}`,
      'aria-controls': `product-tabpanel-${index}`,
      sx: {
        fontWeight: tab === index ? 400 : 700
      }
    };
  }

  function handleDisableFavorite() {
    let disable = false;
    if (wishlist.length) {
      const index = wishlist.findIndex((w) => {
        return w.id === product?.id
      });
      if (index !== -1) {
        disable = true;
      }
    }
    return disable;
  }

  function handleDisableCart() {
    let disable = false;
    if (cart.length) {
      const index = cart.findIndex((c) => {
        return c.id === product?.id
      });
      if (index !== -1) {
        disable = true;
      }
    }
    return disable;
  }
  
  function handleAddToCart() {
    if (product) {
      let list = [];
      let item: CartItem = {
        id: product?.id,
        thumbnail: product?.thumbnail,
        title: product?.title,
        quantity: 1,
        price: product.price - (product.price * (product.discountPercentage)/100)
      };
      list.push(item);
      dispatch(addToCart(list));
      setSnackbarMessage(`${product?.title} was added to the cart!`);
      setSnackbarState(true);
    }
  }

  function handleFavorite() {
    let list = [];
    
    let item: WishListItem = {
      id: product?.id,
      thumbnail: product?.thumbnail,
      title: product?.title
    };

    list.push(item);
    dispatch(addToWishList(list));
    setSnackbarMessage(`${product?.title} was added to your wishlist!`);
    setSnackbarState(true);
  }


  return (
    <>
      <Box sx={{
        backgroundColor: '#fafafa',
        [theme.breakpoints.down('md')]: {
          px: '20px'
        }
      }}>
        <Container maxWidth='xl'>
          <Grid container>
            <Grid item xs={12}>
              <Stack spacing={2} sx={{ my: '30px' }}>
                <Breadcrumbs
                  separator={<NavigateNextIcon fontSize="small" sx={{ '&.MuiSvgIcon-root': { color: 'primary.light' } }}/>}
                  aria-label="breadcrumb"
                  sx={{
                    '& a': {
                      textDecoration: 'none',
                      fontWeight: 700,
                      color: 'primary.dark'
                    }
                  }}
                >
                  {breadcrumbs}
                </Breadcrumbs>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              {isLoading || isFetching ? (
                <Skeleton variant='rectangular' animation='wave' sx={{
                  [theme.breakpoints.up('md')]: {
                    width: '90%',
                    height: 500,
                    mb: '50px'
                  },
                  [theme.breakpoints.down('md')] : {
                    width: '100%',
                    height: 300
                  }
                }}/>
              ) : (
                <Carousel animation='slide' navButtonsAlwaysVisible={true}
                  IndicatorIcon={createImageIcons()}
                  indicatorContainerProps={{
                    style: {
                      marginTop: '20px',
                      marginBottom: '20px',
                      display: 'flex',
                      position: 'relative',
                      zIndex: 5
                    }
                  }}
                  indicatorIconButtonProps={{
                    style: {
                      marginRight: '20px'
                    }
                  }}
                  navButtonsProps={{
                    style: {
                      backgroundColor: 'transparent',
                    }
                  }}
                  sx={{
                    [theme.breakpoints.up('md')]: {
                      width: 506,
                    },
                    [theme.breakpoints.down('md')]: {
                      width: 506,
                    },
                    [theme.breakpoints.down('sm')]: {
                      width: 300,
                    },
                    '& .MuiSvgIcon-root': {
                      fontSize: '65px'
                    }
                  }}
                >
                  { product ?
                    product.images.map((img) => (
                      <ImagePlaceholder
                        key={img}
                        url={img}
                        mobileWidth={300}
                        mobileHeight={277}
                        tabletWidth={506}
                        tabletHeight={450}
                        width={506}
                        height={450}
                        alt='' />
                    ))
                    : (<></>)
                  }
                </Carousel>
              )}
            </Grid>
            {product && !isLoading && !isFetching ? (
              <Grid item xs={12} md={7} ml='-20px' sx={{
                [theme.breakpoints.down('md')]: {
                  pl: '30px',
                  pb: '30px'
                },
                '@media only screen and (min-width: 1024px) and (max-width: 1200px)': {
                  maxWidth: '400px',
                  ml: '15%'
                }
              }}>
                <Typography variant='h4' mt='20px' color='primary.dark'>{product.title}</Typography>
                <Stack direction='row' mt='20px' alignItems='center'>
                  <Rating value={product.rating} readOnly precision={0.5} sx={{
                    color: 'secondary.contrastText',
                    '& .MuiRating-iconEmpty': {
                      color: 'secondary.contrastText'
                    }
                  }}/>
                  <Typography variant='caption' ml='10px'>10 Reviews</Typography>
                </Stack>
                <Typography variant='h3' mt='30px' lineHeight='32px'>${(product.price - (product.price * (product.discountPercentage)/100)).toFixed(2)}</Typography>
                <Stack direction='row' mt='15px' sx={{
                  '& span': {
                    mr: '5px'
                  },
                  [theme.breakpoints.up('md')]: {
                    mb: '130px'
                  }
                }}>
                  <Typography variant='caption'>Availability</Typography>
                  <Typography variant='caption'>:</Typography>
                  <Typography variant='caption' color='primary.contrastText'>{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</Typography>
                </Stack>
                <Typography py='30px' variant='body1' sx={{ display: { xs: 'block', md: 'none' } }}>{product.description}</Typography>
                <Divider />
                <Stack direction='row' sx={{
                  my: '30px',
                  '& button': {
                    width: 30,
                    height: 30,
                    borderRadius: '50%',
                    minWidth: 'unset',
                    mr: '10px',
                    display: 'inline-block'
                  }
                }}>
                  <Button sx={{ backgroundColor: '#23A6F0' }}>{''}</Button>
                  <Button sx={{ backgroundColor: '#2DC071' }}>{''}</Button>
                  <Button sx={{ backgroundColor: '#E77C40' }}>{''}</Button>
                  <Button sx={{ backgroundColor: '#252B42' }}>{''}</Button>
                </Stack>
                <Stack direction='row' sx={{
                  '& .MuiButtonBase-root': {
                    mr: '5px',
                    [theme.breakpoints.up('md')]: {
                      mr: '10px'
                    }
                  },
                  '& svg': {
                    fontSize: 20,
                    color: 'primary.dark'
                  },
                  '& .MuiIconButton-root': {
                    border: '1px solid #e8e8e8',
                    backgroundColor: '#fff',
                    borderRadius: '50%'
                  },
                  '& .MuiIconButton-root.Mui-disabled': {
                    backgroundColor: '#efefef'
                  }
                }}>
                  <Button variant='contained' sx={{
                    backgroundColor: 'primary.contrastText',
                    color: '#fff',
                    textTransform: 'none',
                    width: 148
                  }}>Select Options</Button>
                  <IconButton disabled={handleDisableFavorite()} aria-label='wishlist' onClick={handleFavorite} >
                    <FavoriteBorderOutlinedIcon/>
                  </IconButton>
                  <IconButton disabled={handleDisableCart()} aria-label='cart' onClick={handleAddToCart} >
                    <ShoppingCartOutlinedIcon />
                  </IconButton>
                  <IconButton aria-label='see'>
                    <RemoveRedEyeIcon />
                  </IconButton>
                </Stack>
              </Grid>
            ) : (
              <Grid item xs={12} md={7} ml='-20px' sx={{
                [theme.breakpoints.down('md')]: {
                  pl: '30px',
                  pb: '30px',
                  pt: '20px',
                  '.MuiSkeleton-root': {
                    width: '100%'
                  }
                },
                [theme.breakpoints.up('md')]: {
                  '.MuiSkeleton-root': {
                    width: '50%'
                  }
                }
              }}>
                <Stack>
                  <Skeleton variant='text' animation='wave' height={50}/>
                  <Skeleton variant='text' animation='wave' height={50}/>
                  <Skeleton variant='text' animation='wave' height={50}/>
                  <Skeleton variant='text' animation='wave' height={50}/>
                </Stack>
            </Grid>
            )}
          </Grid>
        </Container>
      </Box>
      <Box mt='20px' sx={{
        display: { xs: 'none', md: 'block' },
        '& .MuiTabs-indicator': {
          display: 'none'
        }
      }}>
        <Container>
          <Box sx={{
            '& .MuiTabs-flexContainer': {
              pb: '15px',
              alignItems: 'center',
              justifyContent: 'center',
            }
          }}>
            <Tabs value={tab} onChange={handleTabs} aria-label='Product Tabs' sx={{
              '& button': {
                textTransform: 'unset'
              },
              '& .MuiButtonBase-root.Mui-disabled': {
                color: 'secondary.dark',
                ml: '-45px',
                fontWeight: 700
              }
            }}>
              <Tab label='Description' {...a11yProps(0)}></Tab>
              <Tab label='Additional Information' {...a11yProps(1)}></Tab>
              <Tab label='Reviews' {...a11yProps(2)}></Tab>
              <Tab label='(0)' disabled={true}></Tab>
            </Tabs>
          </Box>
          <Divider />
          <Box mt='50px'>
            <Box role='tabpanel' hidden={tab !== 0} id='product-tabpanel-0' aria-labelledby='product-tab-0'>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    {isLoading || isFetching ? (
                      <>
                        <Skeleton variant='text' animation='wave' width='80%' height={50}/>
                        <Skeleton variant='text' animation='wave' width='80%' height={50}/>
                      </>
                    ) : (
                      <Typography variant='body1'>{product?.description}</Typography>
                    )}
                  </Grid>
                  <Grid item md={6} display='flex' justifyContent='flex-end'>
                    {isLoading || isFetching ? (
                      <Skeleton variant='rectangular' animation='wave' width={413} height={372}/>
                    ) : (
                      <ImagePlaceholder
                        url={`${product?.thumbnail.toString()}`}
                        width={413}
                        height={372}
                        mobileWidth={413}
                        mobileHeight={372}
                        alt=''
                      />
                    )}
                  </Grid>
                </Grid>
            </Box>
            <Box role='tabpanel' hidden={tab !== 1} id='product-tabpanel-1' aria-labelledby='product-tab-1'>
                Additional Information Here
            </Box>
            <Box role='tabpanel' hidden={tab !== 2} id='product-tabpanel-2' aria-labelledby='product-tab-2'>
                Reviews here
            </Box>
          </Box>
        </Container>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={snackbarState}
        message={snackbarMessage}
        ContentProps={{ sx: {
          backgroundColor: 'secondary.dark',
          fontWeight: 700
        } }}
        ClickAwayListenerProps={{
          onClickAway(event) {
            setSnackbarMessage('');
            setSnackbarState(false);
          },
        }}
      />
    </>
  );
}