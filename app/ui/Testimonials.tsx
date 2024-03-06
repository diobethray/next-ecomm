'use client';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImagePlaceholder from '@/app/ui/ImagePlaceholder';
import StarReviews from '@/app/ui/StarReviews';
import Rating from '@mui/material/Rating';
import { Theme, useTheme } from '@mui/material/styles';

interface TestimonialImageProps {
  url: string;
  theme: Theme;
}

function TestimonialImage({ url, theme }: TestimonialImageProps ) {
  return (
    <ImagePlaceholder
      url={url}
      mobileWidth={112}
      mobileHeight={112}
      width={142}
      height={142}
      alt='' />
  );
}

export default function Testimonials() {
  const theme = useTheme();
  return (
    <Container maxWidth='xl' sx={{
      [theme.breakpoints.up('md')] : {
        mt: '220px',
        mb: '110px',
      },
      [theme.breakpoints.down('md')] : {
        backgroundColor: '#fafafa',
        mt: '100px'
      }
    }}>
      <Grid container spacing={2} sx={{
        [theme.breakpoints.down('md')] : {
          pt: '50px'
        }
      }}>
        <Grid item xs={12} md={6} sx={{
          textAlign: 'center',
          mt: '20px',
          mb: '20px'
        }}>
          <Typography variant='h3'>What they say about us</Typography>
          <Box display='flex' alignItems='center' justifyContent='center' mt='65px' mb='20px'>
            <ImagePlaceholder
              url='https://s3-alpha-sig.figma.com/img/51b4/1f20/db95c385c8df9dbc1cafee5ea93687e3?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nzWwtJM57RykNXp-EoxzrEa8ROLoaKH6EtmhRCaSnjCmA3b-N8qXGx2EgoZZpDWHPlmBMqBReNOE0TKw~gFU6Ui5NXxWpK-H5C00cPdzur~IWaBLOTzf4f3gULBy06x09LBAg7~lgTjWUqanLhWchXK3Va-DBpuMbwvXDxQmOBBtaeoK5sJOxhbljz7WNGVjCCoyzJ78bFKcJ0l5w6EZiiFNeuzIKszgRaL7dp1I7nbILrVng1ZOtOOKsLlAklUshlL1-8gfw5PcMMb352Ync1Fma46WGPVamZMQjWvWyrgJsxGJltnSLrhBtZgObr5YGRn~7aRb6AeAJbrwx-U-nQ__'
              mobileWidth={90}
              mobileHeight={90}
              width={90}
              height={90}
              alt='User'
              sx={{
                borderRadius: '50%',
                overflow: 'hidden'
              }} />
          </Box>
          <Box display='flex' alignItems='center' justifyContent='center' mb='20px'>
            {/* <StarReviews /> */}
            <Rating value={4} readOnly precision={0.5} sx={{ 
              color: 'secondary.contrastText',
              '& .MuiRating-iconEmpty': {
                color: 'secondary.contrastText'
              }
             }}/>
          </Box>
          <Box display='flex' alignItems='center' justifyContent='center' mb='20px'>
            <Typography variant='body1' fontWeight={700} maxWidth='500px'>Slate helps you see how many more days you need to work to reach your financial goal.</Typography>
          </Box>
          <Typography variant='body1' fontWeight={700} color='primary.contrastText'>Regina Miles</Typography>
          <Typography variant='body1' fontWeight={700} mb='20px' color='primary.dark'>Designer</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box maxWidth={480} overflow='hidden'>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TestimonialImage theme={theme} url='https://s3-alpha-sig.figma.com/img/0087/9f3e/e04a28c786575d51ff2f5509decb573e?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZES0uo6kAt8-bWnvyR5aTYbUg3Kun8ffGJujd9GltGZ~q00WJDU1kfngvEHFbQDZOb-tyT41ew0xSgudLzjyPPOmPzlXZm7M2B7gbFKOk6eTKdwR7OEGBaVDiFJN2yA18MHq4bw6MWJ3grsKBNjKbW1Z1pE9twpnDO9NeMqFo73VtA7dMGxWd~fhkn1XAsvwI2ooeCX54IVqJry38jA24vyKzR34gvxuocu0jGbDzH89CeNkumT0l5y3vDAUAGZMfU7SMK9aRIHzduUM2NvRpMQEC8X1q4D1NbTFvJlZEFEgHqZ95Mc~6quexTuPzMHNvEX4nPg2GAHOy-BI3RUwwQ__'/>
              </Grid>
              <Grid item xs={4}>
                <TestimonialImage theme={theme} url='https://s3-alpha-sig.figma.com/img/fe81/f5a6/62540563739b657086248ad0a382191d?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OJoHPO2S1W98B4B1GRp3XAPz6wcd2m9fbYd2~xYOBE~yad8j~y~ATxLOe4MrnoyaPpbhmjVWEOST0SBOM~dH7LtelkCRLxy8ONWzRsrb6TO7vft5QQx2yeWwFSFHu8c3GXcCUlMsxduQgFlr8MZ~Oh6QFF6~IPSIaSP1WrH784nIyNPZdjlsw~4f5cz1kR6lXzXZIXWDy4mLPFnkw2SQNCXEyY8EDBxsm5RyjBbo7BSbOee6WOgpBsnmzCFYMV9smBC0uzSc3ppehAxS8RxCbH9VwFqJzGyT8hfksQjz~CN5wqwqfJ-ygD-oUxFgTt1WpTaB7pc8ChHMq0cALRdQBA__'/>
              </Grid>
              <Grid item xs={4}>
                <TestimonialImage theme={theme} url='https://s3-alpha-sig.figma.com/img/78dd/ce2c/ecd29b2f7fd0c822f75470879b361df4?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ecu1qqnwMSWil49CUSStfPWo2XnD1TpyBrlXQv1giJWwyJrO5mWrZFEcCxIpOirPCRQsVmQyXgjRkNAqAP7JifWSXQ206EtYooIcKtDdGz8uekNHuHQqn8S~lKaNLK26ngG3noKlLIE6J3hLzdfTA66nWsI8kKoMNzCOAtU2t7TCb7jLhzU6kI1yeijcN7K6GpWvxxLEy7LYP23RWfWgkoupu8bkXeTfVk4F8xDzpUmHNc2cHflD5KoKDJYkQvJhXe3kAT9ghZVF5rkKDzeNzH9Of6a9~7RQ5SMIxJ7hnA7vuDfyeJ-4dLTp-BpPcaWMwaJ1U9oZ6huKqEUCx0gZMw__'/>
              </Grid>
              <Grid item xs={4}>
                <TestimonialImage theme={theme} url='https://s3-alpha-sig.figma.com/img/5aad/40cc/cc61574568d928d6a3147584c8aeee3f?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cKoO7lILeWcrUx7bFIiVqahUJH6gx4Sr65xX7ecioi7JXDTo2kKuDM2izdlO~HVqOOu0xDRVj1Fqqp2eRIZlc2GWYp~AXGjD4Z4Lz3V6wMUvQaBZ72qS9qt41tyWMFMnz6WzEKsrUaCLNSMvcpFNdMMX3CJaYo9dIvrxGu5GsiRlSQvFdenicjv2SGCyjLXTIjSdEWOAdMskiOL9kJ~UNkC3dMZfdlyynLWV97u~Uiyd4wN2E~9KPVX-ZrO6cc8Sk7gZ~7VT~~-zX0OZRwXC3q9DH6UiJa3ZJFATSCnI-chLDJszu1BpL69ijiG41jCKJpGcehsSS9KsZ-fVyR74RA__'/>
              </Grid>
              <Grid item xs={4}>
                <TestimonialImage theme={theme} url='https://s3-alpha-sig.figma.com/img/8cfa/532a/7a9b5738525b19f05184c6b37f1fff13?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lZSwm1ztWOj65zi-g4ugLnrewptVa4PLP0ei5B0szqo7v5NuEr3WE6WKBug7mvQNAGVn8zk2KwvjO7nxamQj~3hEXn8k72c6pMDAK0g4bug62y0RiwNhDm70oCKn22tFiAwKdah~HGHrVV3ojEKzZWngG1jBC4abazjJCTO5AlAbT3jIGtHT8yMbnMIR8dFd8RP1-PvK9c--weIACXi3jdlgkoKUxLFBmx9CwX0GJlk7fXi4XhaptEPMmmmv4IGCfJ6cnIEoSC3GwGwXXzWeu0rMIsyn2lKwJ6MQjhc9cPXHuadHXrE0wDjgSfpdBrrYyXy0Dae8l92tcapBGEVCKg__'/>
              </Grid>
              <Grid item xs={4}>
                <TestimonialImage theme={theme} url='https://s3-alpha-sig.figma.com/img/29c0/fceb/11870fcea081912ee81e40aa61518ea2?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BMF5V1cOLjXD6~yksRT~khBi8oAVm5qYcpDpo4SaOQYasAj11fUuT4sr4XzvhLJAAgsnDTBcUo4qoVc8K~k~vPBe9VookKrtcEb929ScjmMlSX9INDTwdk7FhbeuifwYGCax6VX1aeTJ4uVOT~bTNdhV0rRhfsZUrFkA15e1fHVDftn8d8Wd7Zr0oHUx1PYMUJCbfoqsKB2MD2Tycp89D9abe3rXVlq80RSLvZX4Wxrs1z4w2fo3eEapt-byyrqMy-ClZyL5WRIIQodsdmYkMJjmDjcsAnyiQ0tMeD0X1kd307n3WGGgDYR7N0EIDGfZpGVFjT9aQT5KaKUEkJeg8g__'/>
              </Grid>
              <Grid item xs={4}>
                <TestimonialImage theme={theme} url='https://s3-alpha-sig.figma.com/img/780f/07e1/1d7abbd5dfd2c9fe2a7b49e26a96ccdd?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CsyJxVWo50EOEuPWO4AfBbpcx2yYZ9SYpGlw3NgkEcknPsENFTdGB3dCxz9XlyrWvtF5hine6QUcbRnt7Jz0ph8yJhJdZ87c9pm6YtFz37dsVxyB6vpIvr03xp~qEAZhQsWtnUqHLcUFsdzemp1xgDSaEMTZeb-zXcFp-t9amdNvK3Rnidztsl-G152SAfg89g-86SGeN037rOYImW6v4I1C~Jj37g9W0aiJTwpMc3w6CfAdoyJdJByrSnkvkcz~MQSxTCRPmYX5VQu~gt6cAldL5ELpx-LKLsbaiEO5KGFsqx7lgYFrW3uY0rgR-XmDltapQhR-LuyLGRsDlvxqsA__'/>
              </Grid>
              <Grid item xs={4}>
                <TestimonialImage theme={theme} url='https://s3-alpha-sig.figma.com/img/9cf2/6ace/499c6af2de3f0d3ed8c1a042e945720a?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UftBkn72E1-PJAUex75Q1ttbDs0OodKb~KiyOe~v-~ac6b6aR~1v-UltJz7qOZIA-cZGQbL-7ezHAjCdHgWrstoybdjSNTaGWUTVt4EEOvg6OhSDAWSVGXc1Zm3EKJDQSyZBZY5CuK-lnNnNqqYAKaMSzFSHjEWtK1TqbNC00-Ia9-ivozLuKeCL8F5Gr7Xscq3AKedOJS3IQKNyixuBBGH39FcAQ73kjw7Ab0IrUp1jhEeoNoRBbCmf2XRXkGpA7pkgvX36c7iBXjzHQ-dMwp7HHO3fsHLMJyw~mz8UEWKYO7Xs7Vt44A3M4~C6E2V3aTrktvQSr3GWu3XUzKSZgA__'/>
              </Grid>
              <Grid item xs={4}>
                <TestimonialImage theme={theme} url='https://s3-alpha-sig.figma.com/img/5249/b308/b86b7010cacb5bed89efef6c365df384?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lgj1DWQsyi~DHK2SMwk9dpdHnfDxHtbJY5kYYKJRNUKssQDJAwDNf8wCoEAbr0HHO4C-Lr1qVNGB1nNBXDYWaYqt3LvU26OAEEk7bxkrv3XO2r3UbtvNlRn9-tNmfaDxf6hkgcL1HZlZiPmWwOFIJV2PuJEKIteEHfkX-L3dj5EdCdpw864j95WZ57HnUAvxR07V08hk1jKQKRVXoqrH9PkQqE5-B4WUFSu21Nm6tNPNdYHJGqizBesLKaMDKxHNbBk~adVeGgaB9QXn9U81bcrD-UkT-gMWgGp7VNl4-L9x9Muh9afX1Ql2mpGgVqWdt5beccEb1MapoW2yqIA6yA__'/>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}