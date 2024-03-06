'use client';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Typography, TypographyPropsVariantOverrides } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import { Variant } from '@mui/material/styles/createTypography';
import { useTheme } from '@mui/material/styles';
import ImagePlaceholder from '@/app/ui/ImagePlaceholder';

interface AbsoluteBoxProps {
  hVariant: OverridableStringUnion<Variant | "inherit", TypographyPropsVariantOverrides> | undefined;
}

function AbsoluteBox({hVariant} : AbsoluteBoxProps) {
  return (
    <Box className='absolute-box'>
      <Typography variant='caption' color='secondary.main'>5 Items</Typography>
      <Typography variant={hVariant}>FURNITURE</Typography>
      <Link href='/' variant='caption' color='primary.dark' sx={{ textDecoration: 'none' }}>Read More</Link>
    </Box>
  );
}

export default function ShopCards() {
  const theme = useTheme();
  return (
    <Container maxWidth='xl' sx={{
      py: '60px'
    }}>
      <Grid container spacing={2} sx={{
        '& .MuiBox-root': {
          position: 'relative'
        },
        '& img': {
          objectFit: 'cover'
        },
        '& .absolute-box': {
          position: 'absolute',
          top: '20px',
          left: '20px'
        }
      }}>
        <Grid item xs={12} md={6}>
          <ImagePlaceholder
            url='https://s3-alpha-sig.figma.com/img/571c/0e63/5ca0be9d1569e1e8bb654fe318d5fb56?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SqexRcjGONyYolsMB09Ebb~hzU44ke2APSJqbe9CDq8AzmOpaIbb4PVtA111wwrzB5OPnJMn07-nClwOvEdfZpvSd2Ee7HYU-OIDMkhyL0V0lFFSbHPCagIh6tFAw2WVkY6QO10KuCBNhllJLtMvPqVYi7nwSm6SxTqb-G91JODKGwonjT5DpbDMoDjojyv53JDAyCVN5-plt3nSQf9G32hY52LS4F1yrC1ddRRoM6Ls8I3mCpubcHPRerZrDrRsdIaUgVlbDeXd2-7Q2~yJbdnT6ojK4nsnfQcIRhFrjc4jp-U7dmGJVazB9NQl~UeKMrkHPOZJWXbvusH4h-8yyA__'
            mobileWidth='auto'
            mobileHeight='300px'
            width='auto'
            height='616px'
            alt='Image 1'
          >
            <AbsoluteBox hVariant='h2'/>
          </ImagePlaceholder>
        </Grid>
        <Grid container item spacing={2} xs={12} md={6}>
          <Grid item xs={12} md={12}>
            <ImagePlaceholder
              url='https://s3-alpha-sig.figma.com/img/ec73/4855/1cd8c4c04ce2ccb0327fccb66df11983?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YpQLoeYRb9uxNuP3VPkSk45L9r38gYNLcOZyYnV3IMt41Igy7wFK-ffWevqzhzvheJMFmZP2Hu~HjyKeuN1pszF-fXnE2oFIZaqMV05U8PBxpwohSnkaGC2T4G35pDa8ByakGPOah5PL~PSXjxZoJan95moK~ejPutUZsyXBu0XTqxhc4lrRYmh3Gzh1Kvjw2coRVOoIIXXy3YwJRKv5CAcq45cyvOLwkTXYwHPh5T~96wCyt0hLisIWS5vgTm3vyIwZL2wCHPo8SpZjJVZ8JCQrPMK1Hfy~jAKTGEwm4rQs7dnglRQOwOF1iEcGXoIIRtqj07LcBS2o3jKjqPjtow__'
              mobileWidth='auto'
              mobileHeight='300px'
              width='auto'
              height='300px'
              alt='Image 2'
            >
              <AbsoluteBox hVariant='h3'/>
            </ImagePlaceholder>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImagePlaceholder
              url='https://s3-alpha-sig.figma.com/img/0150/39a5/6ac33f2b1eeab39210c46ab15b36b550?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eOQzgnbhL1ANHwLm~mC~SZyxiLBTuZhMqlB7Mqy~sF~skenXY0bHJU-n4GHVfloErrcVa2uFUCWdnmDRvOjV9wIjF8CBE7BOdKaQHP3oWTJyHV4lDzj6~hYQxuS2qeqB7a~BLDW0lz6zSOVJrY~H24~V9eCdBx-8bfpvEwgkP9qdwuhL2poAHZwmSA2QkTYizsPP46~1CvaOJH7k5MUROcOICCwgoZtYR1Q33jJBW-2dqYGX4BmH-UpZ5F83Q7ytgSXi6diYyaEvXZZQNUsUxcF6xCQhstOkaH-RKgEGzTwOXbQqzFv8P2yTWjwUdvWAnc8GmeAS4sj5CPa9c~tqwg__'
              mobileWidth='auto'
              mobileHeight='300px'
              width='auto'
              height='300px'
              alt='Image 3'
            >
              <AbsoluteBox hVariant='h3'/>
            </ImagePlaceholder>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImagePlaceholder
              url='https://s3-alpha-sig.figma.com/img/7e7c/c794/138e93139b79aeb5fb267b66d8835549?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UhGAjyQxK4QQJS1KVug2JMNAs31DBzpSLe67ttQEwn3iOZjUG1JnqFB8lY1O6qI3qQ66UnUHdl3L0ga~OGhJcWsJChX3KcT51Wxf~n5qrSzXwSMYeUsLTuHWUn45AS1sU7nX~EzhyijwdK7eNYQI82ScDgFygvmEyK15kOKsqgA6TTADemzb-MZhP0fBr05Ncrc8-t-w9cX14mAmdXTPvqQWmUcR4delm93-zOpA-v0kp48hfdb3vzcmk4nGkqNdnzOb6FPFkj8rDJVodPh~GW2qpTpBGkRVjRgAYHzJVviVEDm1-KDZG7GtkHzAlLjZToPV0QnIVm4zrNFeh0BXGA__'
              mobileWidth='auto'
              mobileHeight='300px'
              width='auto'
              height='300px'
              alt='Image 4'
            >
              <AbsoluteBox hVariant='h3'/>
            </ImagePlaceholder>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}