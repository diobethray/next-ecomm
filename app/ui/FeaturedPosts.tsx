import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AccessAlarmsRoundedIcon from '@mui/icons-material/AccessAlarmsRounded';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from '@mui/material/Link';
import Image from 'next/image';
import chart from '@/public/chart.svg';
import ImagePlaceholder from '@/app/ui/ImagePlaceholder';

interface PostProps {
  imgUrl: string;
  alt: string;
}

function Post({ imgUrl, alt }: PostProps) {
  return (
    <>
      <ImagePlaceholder
        url={imgUrl}
        mobileWidth='auto'
        mobileHeight={300}
        width='auto'
        height={300}
        alt=''
      >
         <Typography variant='body1' sx={{
            backgroundColor: '#E74040',
            color: '#fff',
            position: 'absolute',
            zIndex: 1,
            top: '20px',
            left: '20px',
            fontWeight: 700,
            p: '5px 15px',
            borderRadius: '3px'
          }}>NEW</Typography>
      </ImagePlaceholder>
      <Box sx={{ p: '20px', boxShadow: '0px 5px 5px #ededed' }}>
        <Box display='flex' maxWidth={160} justifyContent='space-between'>
          <Typography variant='body2' color='primary.contrastText'>Google</Typography>
          <Typography variant='body2'>Trending</Typography>
          <Typography variant='body2'>New</Typography>
        </Box>
        <Typography variant='h4' my='10px'>{`Loudest à la Madison #1 (L'integral)`}</Typography>
        <Typography variant='body1' maxWidth={400} mb='15px'>{`We focus on ergonomics and meeting you where you work. It's only a keystroke away.`}</Typography>
        <Box display='flex' pt='10px' pb='20px' alignItems='center' justifyContent='space-between'>
          <Box display='flex' alignItems='center'>
            <AccessAlarmsRoundedIcon sx={{
              fontSize: '16px',
              '&.MuiSvgIcon-root': {
                color: 'primary.contrastText'
              }
            }}/>
            <Typography variant='body2' ml='5px'>22 April 2021</Typography>
          </Box>
          <Box display='flex' alignItems='center'>
            <Image src={chart} alt='chart' width={16} />
            <Typography variant='body2' ml='5px'>10 comments</Typography>
          </Box>
        </Box>
        <Link underline='hover' display='flex' sx={{
          cursor: 'pointer',
          alignItems: 'center'
        }}>
          <Typography variant='body1' fontWeight={700}> Learn More</Typography>
          <ArrowForwardIosIcon sx={{
            fontSize: '16px',
            '&.MuiSvgIcon-root': {
              color: 'primary.contrastText',
              ml: '10px'
            }
          }}/>
        </Link>
      </Box>
    </>
  );
}

export default function FeaturedPosts() {
  return (
    <Container maxWidth='xl' sx={{
      mt: '150px'
    }}>
      <Box textAlign='center' px='20px'>
        <Typography variant='caption' color='primary.contrastText'>Practice Advice</Typography>
        <Typography variant='h2' sx={{ mt: '10px', mb: '80px' }}>Featured Posts</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Post imgUrl='https://s3-alpha-sig.figma.com/img/1c53/91d2/189bc18c1b18efcbdf935a7b58775de7?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dp~dFxpMVYY-dpA6v2WPdKoBi-EydZHKkmBtDyPOWWIAt0wl1lou-9aijouT30TA7fPQjUfDtWd7LHl9LlfzKbo8WSGVHyzeXCe33tdhSmVbOl4Of5FYTpwjxDUQD55TwGnv6xU9BsRne9QYbhAbzGBFXmEOEzr-xU~gh0VKf7YUs9FiUxtRXbybYhmL9kc0fgEQUd6rGeX4GGy3zt6aYx~vIsQNWY4n6yz78PlWA4aAyFhp~0DoNJL8F~r5wNMEOyTWCfUTgvReenpKVacvmC3uzzx1LAxHIDjdfcZcoJsPWV7IfoLrcWBVshY6-arGb6~3Xcd1K8CjICROgg9p1w__' alt='Post 1' />
        </Grid>
        <Grid item xs={12} md={4}>
          <Post imgUrl='https://s3-alpha-sig.figma.com/img/f9f3/a7c3/d345cb2add9d6095dc3dd76a31853c57?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FV9pEHo6qJBmrT6SGx5BQx9niJLIBWA1LRzNHDcoHvvKJaKyzCcawFRjTf4FEzQ-Zy~Mthxgic0hn-hBFqvwPbcRqmLRb9JEkE31ASIUkfc7OPYUyWCplqva4Vp866-hSM7XALqvlKVwws8qSI3eBxMojq1yOdeDlpOmzKVhAGlUKel6HVPvYa86S-xtOf73UYVfb435yHgaKWw2ZSxYtcHbQaSS7ozuaYEbw-oNgcKN5Jxje4o-FwZpGxlQp9s8oWc2D5ZrF6y~QDQQ~igc-wuT2H-krUmP1NnDEshSo00~a7uYG42JxH~qSfv9HR7JIqK8dQUzhTCDQYbmlE0bnw__' alt='Post 2' />
        </Grid>
        <Grid item xs={12} md={4}>
          <Post imgUrl='https://s3-alpha-sig.figma.com/img/3016/ca71/0ac5895ef5c1226ea345dafd1986d3f7?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lXAfmMZzatOn4MR8b6CYxGWcq6chm3~YY-TbHf2I0QTmK7QF21FsKrQl~xxJ08gvY3tmyUCAQlUo62mKFj9Ppp-4qSlw8wikVqBnQ7M5LssoW82phuX3mPt6WzZNWWQ5aTAEfNPFKYjtYsJa4tWuJbvEbPp0wSY0GXjtfVO5qwMXdgi3M4HpLmUAE1fFvkjJTTmjGud6Iu9m7ysD5DWktZOtHXb3D5-OmfEnKGMEoPUBvM1NRyYVFFaEEaDbCH2GRNhlCBvE-JyI14GeCzXja42-ASKrTgCP7NhQrp~J9kj7TJwh7jQ0sA8h6HBuBebC8X44zIt1FZ~AW1MjoTW-tA__' alt='Post 3' />
        </Grid>
      </Grid>
    </Container>
  );
}