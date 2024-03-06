'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

interface SubHeadingProps {
  title: string;
  subTitle: string;
  description: string;
}

export default function SubHeading({ title, subTitle, description }: SubHeadingProps) {
  const theme = useTheme();
  return (
    <Box textAlign='center' sx={{
      pt: '25px',
      pb: '20px',
      [theme.breakpoints.up('md')]: {
        pt: '115px'
      }
    }}>
      <Typography variant='h4'>{subTitle}</Typography>
      <Typography variant='h3' sx={{ my: '20px' }}>{title}</Typography>
      <Typography variant='caption' fontWeight={400}>{description}</Typography>
    </Box>
  );
}