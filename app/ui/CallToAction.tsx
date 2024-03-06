'use client';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const imageDefaultSizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

export default function CallToAction() {
  const theme = useTheme();
  return (
    <Box sx={{
      position: 'relative',
      '& img': {
        objectFit: 'cover'
      },
      [theme.breakpoints.up('md')]: {
        height: '640px'
      },
      [theme.breakpoints.down('md')]: {
        height: '712px',
        mt: '80px'
      }
    }}>
      <Box sx={{
        position: 'absolute',
        zIndex: 1,
        textAlign: 'center',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Box sx={{
          [theme.breakpoints.down('md')]: {
            px: '40px'
          }
        }}>
          <Typography variant='caption' color='primary.contrastText' mt='30px' mb='30px' display='block'>Designing Better Experience</Typography>
          <Typography variant='h2' maxWidth={570} display='block' mx='auto' mb='30px'>Problems trying to resolve the conflict between </Typography>
          <Typography variant='body1' maxWidth={447} display='block' mx='auto' mb='30px'>Problems trying to resolve the conflict between the two major realms of Classical physics:</Typography>
          <Typography variant='h3' color='secondary.dark' mb='30px'>$16.48</Typography>
          <Button variant='contained' sx={{
            color: '#fff',
            backgroundColor: 'primary.contrastText',
            fontSize: 14,
            p: '10px 30px',
            mb: '30px'
          }}>ADD YOUR CALL TO ACTION</Button>
        </Box>
      </Box>
      <Image 
        src='https://s3-alpha-sig.figma.com/img/7a78/51d9/1fe5a0786830b60ff78a501b3a5d581e?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qF3ABf-SelQcUVwqJP2KBj2X3HsCkQ5Sg0ij92zNRgw9Z9Va~aOQdd7Lt6pjpXUn~sUER95jHbG-aPr4tb6iHTPZCM4UbcUkVNmnBfA7qbXwxieDQxcf1ghmZbI99KmtfnHw1j5qhQf6SiQSpWmKId3B0d0aBsU-NgM1FTZg4W0bG78NTf86WA2UNiYYJrCJDusZ5bB5ZzhA6CoVQdjk7QNipSKEcD30M-3gm1k41ofHOdEnpWAKudXJm9NXADJmnienUBU2nTFrNdVfUAhISznkVWSm511CZfbwg1dEyNskven49o7pMTBlcTxp8fh6nrNLEw92yJUjuwEK4R-O7g__'
        alt=''
        fill={true}
        sizes={imageDefaultSizes}
      />
    </Box>
  );
}