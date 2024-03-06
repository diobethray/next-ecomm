'use client';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { SxProps, Theme, useTheme } from '@mui/material/styles'; 

interface ImagePlaceHolderProps {
  url: string;
  width: number | string;
  height: number | string;
  mobileWidth: number | string;
  mobileHeight : number | string;
  tabletWidth?: number | string;
  tabletHeight?: number | string;
  alt: string;
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
  onClick?(id: number): void;
}

export default function ImagePlaceholder({ url, width, height, mobileWidth, mobileHeight, tabletWidth, tabletHeight, alt, sx = [], children, onClick }: ImagePlaceHolderProps) {
  const theme = useTheme();
  const imageDefaultSizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
  if (url) {
    return (
      <Box sx={[
        {
          position: 'relative',
          '& img': {
            objectFit: 'cover',
          },
          [theme.breakpoints.up('md')]: {
            width,
            height,
            '& img': {
              objectPosition: '0 0'
            }
          },
          [theme.breakpoints.down('md')]: {
            width: tabletWidth,
            height: tabletHeight
          },
          [theme.breakpoints.down('sm')]: {
            width: mobileWidth,
            height: mobileHeight
          },
        },
        ...(Array.isArray(sx) ? sx : [sx])
      ]}>
        <Image src={url} alt={alt} fill={true} sizes={imageDefaultSizes}/>
        {children}
      </Box>
    );
  } else {
    return (<></>);
  }
}