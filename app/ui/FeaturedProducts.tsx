'use client';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SubHeading from '@/app/ui/SubHeading';
import ImagePlaceHolder from '@/app/ui/ImagePlaceholder';
import { useTheme, Theme } from '@mui/material/styles';
import { useGetProductsQuery } from '@/app/services/dummy';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { append, loadMore } from '@/app/lib/productsSlice';
import { RootState } from '@/app/lib/store';
import Product from '@/app/types/Product';
import Skeleton from '@mui/material/Skeleton';
import Link from 'next/link';

interface BestSellerProductProps {
  product: Product;
}

function BestSellerProduct({ product }: BestSellerProductProps) {
  return (
    <Grid item xs={15} md={3} textAlign='center'>
      <Link href={`/product?id=${product.id}`}>
        <ImagePlaceHolder
          url={product.thumbnail}
          mobileWidth='auto'
          mobileHeight='360px'
          width='auto'
          height='238px'
          alt=''
          sx={{ mx: 2, cursor: 'pointer' }}
        />
      </Link>
      <Box sx={{ 
        py: '20px',
        px: '0',
        mx: 2,
        '& p': {
          p: '5px'
        }
      }}>
        <Typography color='primary.dark' fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={700}>{product.category}</Typography>
        <Box display='flex' alignItems='center' justifyContent='center' sx={{
          '& p': {
            px: '3px'
          }
        }}>
          <Typography color='primary.light' fontWeight={700}>${product.price}</Typography>
          <Typography color='secondary.dark' fontWeight={700}>${(product.price - (product.price * (product.discountPercentage)/100)).toFixed(2)}</Typography>
        </Box>
      </Box>
    </Grid>
  );
}

interface BestSellerProductSkeletonProps {
  theme: Theme;
}

function BestSellerProductSkeleton({ theme }: BestSellerProductSkeletonProps) {
  return (
    <Grid item xs={15} md={3} textAlign='center'>
      <Skeleton variant="rectangular" animation='wave' sx={{
        [theme.breakpoints.up('md')]: {
          width: 'auto',
          height: '238px'
        },
        [theme.breakpoints.down('md')]: {
          width: 'auto',
          height: '360px'
        }
      }} />
      <Box sx={{
        py: '20px',
        px: '0',
        mx: 2,
        '& p': {
          p: '5px'
        },
      }}>
        <Skeleton variant='text' animation='wave' width='auto' />
        <Skeleton variant='text' animation='wave' width='auto'/>
        <Box display='flex' alignItems='center' justifyContent='center' sx={{
          '& p': {
            px: '3px'
          }
        }}>
          <Skeleton variant='text' animation='wave' width={50} sx={{ mr: '5px' }}/>
          <Skeleton variant='text' animation='wave' width={50}/>
        </Box>
      </Box>
    </Grid>
  );
}

interface FeaturedProductsProps {
  showLoadMore: boolean
}

export default function FeaturedProducts({ showLoadMore }: FeaturedProductsProps ) {
  const productsState = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const theme = useTheme();
  const skip = productsState.products.skip;

  // fetch data using RTK Query Hooks
  const { data, error, isLoading, isFetching } = useGetProductsQuery(productsState.products.skip.toString());

  const total = data && data.total ? data.total : 0;

  // dispatch data response
  useEffect(() => {
    if (data && data.products) {
      dispatch(append(data.products));
    }
  }, [data, dispatch]);

  function generateProducts() {
    if (productsState.products.rows.length) {
      // only show 10 if Loadmore not allowed
      const productList = [...productsState.products.rows];
      const showTheseProducts = showLoadMore ? productList : productList.slice(0, 10);
      return showTheseProducts.map((product: Product) => (
        <BestSellerProduct key={product.id} product={product} />
      ));
    } else {
      return <></>;
    }
  }

  function generateProductSkeleton() {
    let skeletons = [];
    for (let i = 0; i < 10; i++) {
      skeletons.push(<BestSellerProductSkeleton key={i} theme={theme}/>);
    }
    return (
      skeletons
    );
  }

  function handleLoadMore() {
    dispatch(loadMore());
  }

  return (
    <Container maxWidth='xl'>
      <Grid container columns={15} spacing={4} sx={{
        [theme.breakpoints.up('md')]: {
          pl: 15
        },
        [theme.breakpoints.down('md')]: {
          px: 4,
          '&  h4': {
            display: 'none'
          }
        }
      }}>
          <Grid item xs={15}>
            <SubHeading 
              title='BESTSELLER PRODUCTS'
              subTitle='Featured Products'
              description='Problems trying to resolve the conflict between'
            />
          </Grid>
          {generateProducts()}
          {isLoading || isFetching ? generateProductSkeleton() : (<></>)}
          <Grid item xs={15} textAlign='center'>
            {((skip !== total) && showLoadMore) ? (
              <Button onClick={handleLoadMore} variant='outlined' sx={{
                color: 'primary.contrastText',
                borderColor: 'primary.contrastText',
                fontWeight: 700,
                borderRadius: '5px',
                py: '15px',
                px: '40px',
                mt: '20px',
                mb: '65px',
                '&:hover': {
                  backgroundColor: 'transparent',
                  borderColor: 'primary.contrastText'
                }
              }}>LOAD MORE PRODUCTS</Button>
            ) : (
              <></>
            )}
          </Grid>
      </Grid>
    </Container>
  );
}