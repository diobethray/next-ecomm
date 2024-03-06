'use client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import ResponsiveAppBar from '@/app/ui/ResponsiveAppBar';
import ShopCards from '@/app/ui/ShopCards';
import FeaturedProducts from '@/app/ui/FeaturedProducts';
import FeatureServices from '@/app/ui/FeatureServices';
import FeaturedPosts from '@/app/ui/FeaturedPosts';
import Testimonials from '@/app/ui/Testimonials';
import CallToAction from '@/app/ui/CallToAction';
import BottomBar from '@/app/ui/BottomBar';
import theme from '@/app/ui/theme';
import { Provider } from 'react-redux';
import { store, persistor } from '@/app/lib/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function LandingPage() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ResponsiveAppBar />
          <ShopCards />
          <FeaturedProducts showLoadMore={true} />
          <FeatureServices />
          <FeaturedPosts />
          <Testimonials />
          <CallToAction />
          <BottomBar sx={{
            backgroundColor: '#fafafa'
          }}/>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}