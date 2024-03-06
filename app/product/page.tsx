'use client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import ResponsiveAppBar from '@/app/ui/ResponsiveAppBar';
import Details from '@/app/product/Details';
import FeaturedProducts from '@/app/ui/FeaturedProducts';
import BottomBar from '@/app/ui/BottomBar';
import theme from '@/app/ui/theme';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import Hooli from '@/public/hooli.svg';
import Lyft from '@/public/lyft.svg';
import Company from '@/public/company.svg';
import Stripe from '@/public/stripe.svg';
import Aws from '@/public/aws.svg';
import Company2 from '@/public/company2.svg';
import { Provider } from 'react-redux';
import { store, persistor } from '@/app/lib/store';
import { PersistGate } from 'redux-persist/integration/react';


export default function ProductPage() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ResponsiveAppBar />
          <Details />
          <Box sx={{
            display: { xs: 'none', md: 'block' },
            backgroundColor: '#fafafa',
            mt: '100px'
          }}>
            <FeaturedProducts showLoadMore={false}/>
          </Box>
          <Box pt={{ xs: '60px', md: '30px' }} pb={{ xs: '60px', md: '50px' }} sx={{
            backgroundColor: '#fafafa',
          }}>
            <Container maxWidth='xl'>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 6, md: 1 }} sx={{
                alignItems: 'center',
                justifyContent: 'space-evenly'
              }}>
                <Image alt='Hooli' src={Hooli} width={103} />
                <Image alt='Lyft' src={Lyft} width={83} />
                <Image alt='Company' src={Company} width={102} />
                <Image alt='Stripe' src={Stripe} width={103} />
                <Image alt='Aws' src={Aws} width={104} />
                <Image alt='Company2' src={Company2} width={76} />
              </Stack>
            </Container>
          </Box>
          <BottomBar sx={{
            backgroundColor: '#fff'
          }}/>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}