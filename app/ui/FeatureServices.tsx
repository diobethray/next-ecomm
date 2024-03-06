'use client';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SubHeading from '@/app/ui/SubHeading';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import Typography from '@mui/material/Typography';
import { ReactElement } from 'react';
import { IconProps, useTheme, Theme } from '@mui/material';
import Image from 'next/image';
import bookSvg from '@/public/carbon_book.svg';

interface ServiceProps {
  theme: Theme;
  logo: ReactElement<IconProps> | ReactElement;
  title: string;
  description: string;
}

function Service({ theme, logo, title, description }: ServiceProps) {
  return (
    <Box sx={{
      textAlign: 'center'
    }}>
      {logo}
      <Typography variant='h3' color={theme.palette.primary.dark}>{title}</Typography>
      <Typography variant='caption' sx={{
        '&.MuiTypography-root': {
          maxWidth: '270px',
          display: 'block',
          m: '20px auto'
        }
      }}>{description}</Typography>
    </Box>
  );
}

export default function FeatureServices() {
  const theme = useTheme();
  return (
    <Container maxWidth='xl' sx={{
      '& svg': {
        color: theme.palette.primary.contrastText,
        fontSize: 72,
        my: '10px'
      },
      '& img': {
        mb: '10px'
      },
      '& h3': {
        mb: '10px'
      },
      [theme.breakpoints.down('md')]: {
        px: 8,
        '& h3': {
          mx: '-5px'
        }
      }
    }}>
      <Grid container spacing={2} rowSpacing={{ xs: 6 }} sx={{
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Grid item xs={12}>
          <SubHeading
            title='THE BEST SERVICES'
            subTitle='Featured Products'
            description='Problems trying to resolve the conflict between'
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Service 
            theme={theme}
            logo={<LocalLibraryIcon />}
            title='Easy Wins'
            description='Get your best looking smile now!'
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Service
            theme={theme}
            logo={<Image alt='Book' src={bookSvg} width={72} />}
            title='Concrete'
            description='Defalcate is most focused in helping you discover your most beautiful smile'
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Service 
            theme={theme}
            logo={<TrendingUpOutlinedIcon/>}
            title='Hack Growth'
            description='Overcame any hurdle or any other problem.'
          />
        </Grid>
      </Grid>
    </Container>
  );
}